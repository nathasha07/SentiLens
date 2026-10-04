# ✦ SentiLens

### AI-Powered Sentiment Analysis Web Application

SentiLens is a machine learning web application that analyzes movie reviews and classifies them as **positive** or **negative**. It combines a TF-IDF text representation with Logistic Regression and provides the prediction through a modern, responsive web interface.

## ✨ Features

- 🤖 Machine-learning-based sentiment classification
- ⚡ Real-time sentiment prediction
- 📊 Confidence score
- 📈 Positive and negative probability scores
- 📋 Model performance metrics
- 🧠 TF-IDF feature extraction
- 🔬 Logistic Regression classifier
- 📱 Responsive modern UI
- 🌙 Dark-themed interface
- 🖥️ Flask backend with HTML/CSS/JavaScript frontend

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Python
- Flask

### Machine Learning

- Scikit-learn
- Pandas
- TF-IDF
- Logistic Regression

### Dataset

IMDb Large Movie Review Dataset containing 50,000 labeled movie reviews.

## 🧠 How It Works

```text
User Input
    ↓
Flask Backend
    ↓
Text Preprocessing
    ↓
TF-IDF Vectorization
    ↓
Logistic Regression
    ↓
Sentiment Prediction
    ↓
Confidence Score
    ↓
Frontend Result
```

Download the IMDb Large Movie Review Dataset separately and place IMDB Dataset.csv inside the data/ directory before running train.py.

## 📊 Model Performance

The model was evaluated on 10,000 unseen test reviews.

| Metric             |  Score |
| ------------------ | -----: |
| Accuracy           | 89.99% |
| Negative Precision |    91% |
| Negative Recall    |    89% |
| Negative F1        |    90% |
| Positive Precision |    89% |
| Positive Recall    |    91% |
| Positive F1        |    90% |

### Confusion Matrix

|                     | Predicted Negative | Predicted Positive |
| ------------------- | -----------------: | -----------------: |
| **Actual Negative** |              4,453 |                547 |
| **Actual Positive** |                454 |              4,546 |

## 📁 Project Structure

```text
sentilens/
│
├── app.py
├── train.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── data/
│   └── IMDB Dataset.csv
│
├── model/
│   └── sentiment_model.pkl
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/sentilens.git
cd sentilens
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Train the model

```bash
python train.py
```

This generates:

```text
model/sentiment_model.pkl
```

### 5. Start the application

```bash
python app.py
```

Open:

```text
http://127.0.0.1:5000
```

## 🧪 Example

### Positive

```text
This movie was absolutely fantastic. The acting was incredible!
```

Result:

```text
Positive
```

### Negative

```text
This was one of the worst movies I have ever watched.
```

Result:

```text
Negative
```

## ⚠️ Limitations

The model is trained on IMDb movie reviews, so its predictions are optimized for movie-review text. Performance may vary when analyzing completely different types of text such as social-media posts, technical reviews, or financial news.

## 🔮 Future Improvements

- Add neutral sentiment classification
- Support multiple languages
- Add sentiment history
- Add user accounts
- Improve model with more diverse datasets
- Experiment with transformer-based models
- Deploy the application publicly

## 👩‍💻 Author

**Nathasha Vipin**

B.Tech Computer Science Engineering Student

---

⭐ If you found this project useful, consider giving the repository a star!
