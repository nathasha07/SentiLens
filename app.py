from flask import Flask, render_template, request, jsonify
import joblib

app = Flask(__name__)

model = joblib.load("model/sentiment_model.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.get_json()

    text = data.get("text", "").strip()

    if not text:
        return jsonify({
            "error": "Please enter some text."
        }), 400

    prediction = model.predict([text])[0]

    probabilities = model.predict_proba([text])[0]

    classes = model.classes_

    confidence = max(probabilities) * 100

    scores = {
        classes[i]: round(probabilities[i] * 100, 2)
        for i in range(len(classes))
    }

    return jsonify({
        "sentiment": prediction,
        "confidence": round(confidence, 2),
        "scores": scores
    })


if __name__ == "__main__":
    app.run(debug=True)