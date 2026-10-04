import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)


# -----------------------------
# 1. Load dataset
# -----------------------------

print("Loading dataset...")

data = pd.read_csv("data/IMDB Dataset.csv")

print(f"Dataset size: {len(data)} reviews")


# -----------------------------
# 2. Prepare data
# -----------------------------

X = data["review"]
y = data["sentiment"]


# -----------------------------
# 3. Train/test split
# -----------------------------

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

print(f"Training samples: {len(X_train)}")
print(f"Testing samples: {len(X_test)}")


# -----------------------------
# 4. Create ML pipeline
# -----------------------------

model = Pipeline([

    (
        "tfidf",

        TfidfVectorizer(
            lowercase=True,
            stop_words="english",
            max_features=20000,
            ngram_range=(1, 2)
        )
    ),

    (
        "classifier",

        LogisticRegression(
            max_iter=1000
        )
    )

])


# -----------------------------
# 5. Train
# -----------------------------

print("\nTraining model...")

model.fit(X_train, y_train)

print("Training complete!")


# -----------------------------
# 6. Evaluate
# -----------------------------

print("\nEvaluating model...")

predictions = model.predict(X_test)


accuracy = accuracy_score(
    y_test,
    predictions
)


print(
    f"\nAccuracy: "
    f"{accuracy * 100:.2f}%"
)


print("\nClassification Report:")

print(
    classification_report(
        y_test,
        predictions
    )
)


print("\nConfusion Matrix:")

print(
    confusion_matrix(
        y_test,
        predictions
    )
)


# -----------------------------
# 7. Save model
# -----------------------------

joblib.dump(
    model,
    "model/sentiment_model.pkl"
)

print(
    "\nModel saved to "
    "model/sentiment_model.pkl"
)