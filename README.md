# emotiondetection
# 🧠 Emotion Reflection Tool

A clean, mobile-first web app that allows users to reflect on their emotions by entering short text descriptions. The app analyzes the text and returns a detected emotion with a confidence score using a mock API powered by Python Flask.

---

## 🌐 Demo

> "I feel nervous about my first job interview."  
✅ Detected Emotion: 😰 Anxious  
✅ Confidence: 90%

---

## 🔧 Tech Stack

| Layer      | Technology     |
|------------|----------------|
| Frontend   | React + TypeScript + CSS |
| Backend    | Python + Flask + CORS    |
| Styling    | Plain CSS (no framework) |
| Deployment | Runs locally on `localhost` |

---

## 🚀 Features

- Clean and responsive UI (mobile-first)
- Text area input for emotional reflection
- Loading spinner while analyzing
- Emotion + confidence display with emoji
- Basic keyword-based emotion detection (mock logic)
- Graceful error handling
- Signature footer

---

## 📁 Project Structure

Emotion/
├── frontend/ # React + TypeScript frontend
│ ├── src/
│ │ ├── App.tsx
│ │ └── App.css
├── backend/ # Flask API backend
│ ├── app.py
│ └── requirements.txt


---
##Packages Used
axios – for frontend-to-backend API calls

flask – lightweight Python web framework

flask-cors – to allow cross-origin requests from frontend

##Example Inputs to Try
Input	Result
"I feel nervous about my first job interview"	😰 Anxious
"I'm super excited to start my new internship"	🤩 Excited
"Today I just feel sad and lost."	😢 Sad
"Everything makes me so mad!"	😠 Angry

## 🛠️ Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/yourusername/emotion-reflection-tool.git
cd emotion-reflection-tool

cd backend
python -m venv venv
venv\Scripts\activate        # For Windows
pip install -r requirements.txt
python app.py

cd frontend
npm install
npm run dev```


