import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:5000/analyze', { text });
      setResult(response.data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getEmoji = (emotion: string): string => {
    switch (emotion.toLowerCase()) {
      case 'happy':
        return '😄';
      case 'sad':
        return '😢';
      case 'angry':
        return '😠';
      case 'anxious':
        return '😰';
      case 'excited':
        return '🤩';
      case 'confused':
        return '😕';
      default:
        return '🙂';
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🧠 Emotion Reflection Tool</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="How are you feeling?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? <span className="loader"></span> : 'Submit'}
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        {result && (
          <div className="result">
            <h2>Detected Emotion:</h2>
            <p className="emotion">
              {getEmoji(result.emotion)} {result.emotion}
            </p>
            <p className="confidence">Confidence: {(result.confidence * 100).toFixed(1)}%</p>
          </div>
        )}
      </div>

      <p className="footer">Made with 💜 by Deepanshi Goswami</p>
    </div>
  );
}

export default App;
