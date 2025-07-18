from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get('text', '').lower()

    # Very basic keyword matching
    if any(word in text for word in ['nervous', 'worried', 'anxious']):
        emotion = 'Anxious'
    elif any(word in text for word in ['happy', 'joy', 'great']):
        emotion = 'Happy'
    elif any(word in text for word in ['sad', 'lonely', 'depressed']):
        emotion = 'Sad'
    elif any(word in text for word in ['angry', 'mad', 'frustrated']):
        emotion = 'Angry'
    elif any(word in text for word in ['excited', 'thrilled']):
        emotion = 'Excited'
    else:
        emotion = 'Neutral'

    return jsonify({
        'emotion': emotion,
        'confidence': 0.9
    })

if __name__ == '__main__':
    app.run(debug=True)
