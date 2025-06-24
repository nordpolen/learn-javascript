document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const scoreDisplay = document.getElementById('scoreDisplay');
  const correctAnswersContainer = document.getElementById('correctAnswers');
  scoreDisplay.innerHTML = '';
  correctAnswersContainer.innerHTML = '';
  correctAnswersContainer.style.display = 'block';

  const correctAnswers = {
    q1: "1994",
    q2: ["Pikachu", "Mario"],
    q3: ["The Legend of Zelda", "Legend of Zelda", "Zelda"],
    q4: "Microsoft",
    q5: ["Fortnite", "PUBG"],
    q6: ["The End", "End"],
    q7: "The Witcher 3",
    q8: ["Hollow Knight", "Celeste", "Stardew Valley"],
    q9: ["Kings Canyon", "King's Canyon", "Canyon"],
    q10: "Zelda"
  };

  let score = 0;
  const total = Object.keys(correctAnswers).length;

  for (const [key, correct] of Object.entries(correctAnswers)) {
    let userAnswer;
    const resultLine = document.createElement("p");

    // Checkbox buttons (multiple answers)
    if (Array.isArray(correct) && ["q2", "q5", "q8"].includes(key)) {
      const selected = Array.from(document.querySelectorAll(`input[name="${key}[]"]:checked`)).map(i => i.value);
      userAnswer = selected;

      const isCorrect =
        selected.length === correct.length &&
        selected.every(val => correct.includes(val)) &&
        correct.every(val => selected.includes(val));

      const userStr = selected.length ? selected.join(", ") : "No answer";
      resultLine.innerHTML = `Q${key.slice(1)}: Your answer: <code class="${isCorrect ? 'correct' : 'wrong'}">${userStr}</code> — Correct: <code>${correct.join(", ")}</code>`;
      if (isCorrect) score++;

    // Radio buttons (one answer)
    } else if (document.querySelectorAll(`input[name="${key}"]`).length > 1) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      userAnswer = selected ? selected.value.trim() : "";

      const isCorrect = Array.isArray(correct)
        ? correct.some(accepted => userAnswer.toLowerCase().includes(accepted.toLowerCase()))
        : userAnswer.toLowerCase() === correct.toLowerCase();

      resultLine.innerHTML = `Q${key.slice(1)}: Your answer: <code class="${isCorrect ? 'correct' : 'wrong'}">${userAnswer || "No answer"}</code> — Correct: <code>${Array.isArray(correct) ? correct.join(", ") : correct}</code>`;
      if (isCorrect) score++;

    // Text fields
    } else {
      const input = document.getElementById(key);
      userAnswer = input ? input.value.trim() : "";

      const isCorrect = Array.isArray(correct)
        ? correct.some(accepted => userAnswer.toLowerCase().includes(accepted.toLowerCase()))
        : userAnswer.toLowerCase() === correct.toLowerCase();

      resultLine.innerHTML = `Q${key.slice(1)}: Your answer: <code class="${isCorrect ? 'correct' : 'wrong'}">${userAnswer || "No answer"}</code> — Correct: <code>${Array.isArray(correct) ? correct.join(", ") : correct}</code>`;
      if (isCorrect) score++;
    }

    correctAnswersContainer.appendChild(resultLine);
  }

  const summary = document.createElement("div");
  summary.className = score === total ? "success" : "error";
  summary.innerHTML = `<strong>Quiz submitted!</strong><br>You scored ${score} out of ${total}.`;
  scoreDisplay.appendChild(summary);
});
