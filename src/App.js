import React, { useState } from "react";
import "./styles.css";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3,
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1,
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris",
    ],
    correct: 0,
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix",
    ],
    correct: 0,
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing",
    ],
    correct: 0,
  },
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerClick = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  const percentage = (score / questions.length) * 100;

  return (
    <div className="quiz-container">
      {isFinished ? (
        <div>
          <h2>Sonuçlarınız</h2>
          <p>Toplam Puan: {score}</p>
          <p>Yüzde: {percentage.toFixed(2)}%</p>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswerClick(index)}>
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
