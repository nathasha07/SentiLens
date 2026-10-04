const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

const analyzeButton = document.getElementById("analyzeButton");
const clearButton = document.getElementById("clearButton");

const resultCard = document.getElementById("resultCard");
const errorMessage = document.getElementById("errorMessage");

const sentimentText = document.getElementById("sentimentText");
const sentimentIcon = document.getElementById("sentimentIcon");

const confidenceValue = document.getElementById("confidenceValue");
const confidenceProgress = document.getElementById("confidenceProgress");

const positiveScore = document.getElementById("positiveScore");

const negativeScore = document.getElementById("negativeScore");

const positiveBar = document.getElementById("positiveBar");

const negativeBar = document.getElementById("negativeBar");

// Character counter

textInput.addEventListener("input", () => {
  charCount.textContent = `${textInput.value.length} / 500`;
});

// Example buttons

document.querySelectorAll(".example-btn").forEach((button) => {
  button.addEventListener("click", () => {
    textInput.value = button.dataset.text;

    charCount.textContent = `${textInput.value.length} / 500`;

    textInput.focus();
  });
});

// Clear button

clearButton.addEventListener("click", () => {
  textInput.value = "";

  charCount.textContent = "0 / 500";

  resultCard.classList.add("hidden");
  errorMessage.classList.add("hidden");
});

// Analyze

analyzeButton.addEventListener("click", async () => {
  const text = textInput.value.trim();

  if (!text) {
    showError("Please enter some text to analyze.");

    return;
  }

  errorMessage.classList.add("hidden");

  analyzeButton.disabled = true;

  analyzeButton.innerHTML = `
        <span>Analyzing...</span>
    `;

  try {
    const response = await fetch("/analyze", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        text: text,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    displayResult(data);
  } catch (error) {
    showError(error.message);
  }

  analyzeButton.disabled = false;

  analyzeButton.innerHTML = `
        <span class="button-icon">✦</span>
        Analyze Sentiment
        <span class="arrow">→</span>
    `;
});

// Display result

function displayResult(data) {
  resultCard.classList.remove("hidden");

  const sentiment = data.sentiment.toLowerCase();

  const confidence = data.confidence;

  sentimentText.textContent =
    sentiment.charAt(0).toUpperCase() + sentiment.slice(1);

  confidenceValue.textContent = `${confidence}%`;

  confidenceProgress.style.width = `${confidence}%`;

  const positive = data.scores.positive || 0;

  const negative = data.scores.negative || 0;

  positiveScore.textContent = `${positive}%`;

  negativeScore.textContent = `${negative}%`;

  positiveBar.style.width = `${positive}%`;

  negativeBar.style.width = `${negative}%`;

  if (sentiment === "positive") {
    sentimentIcon.textContent = "😊";

    sentimentText.style.color = "#4ade80";
  } else {
    sentimentIcon.textContent = "😕";

    sentimentText.style.color = "#f87171";
  }

  resultCard.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

// Error

function showError(message) {
  errorMessage.textContent = message;

  errorMessage.classList.remove("hidden");
}
