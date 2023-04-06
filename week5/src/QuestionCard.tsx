import { useState } from "react";
import styles from "./styles/questionCard.module.scss";
import { Answer, Question } from "./types";
import QuizSession from "./QuizSession";

export interface QuestionCardProps {
  question?: Question,
  quizSession: QuizSession,
  callback: () => void,
}

// This component displays a single quiz question using a Question object passed as a prop. It imports CSS styles and a QuizSession class, and initializes one state using useState.

// The component defines handleChange and handleClick functions to update the selected answer and submit it to the QuizSession respectively.

// The return statement renders the question, answer choices, and a submit button. When the button is clicked, it calls the callback prop function to trigger the next question in the quiz.

const QuestionCard = ({ question, quizSession, callback }: QuestionCardProps) => {
  if (!question) return null;
  const [answer, setAnswer] = useState<Answer>(null);

  const handleChange = (num: number) => {
    switch (num) {
      case 0: setAnswer("a"); break;
      case 1: setAnswer("b"); break;
      case 2: setAnswer("c"); break;
      case 3: setAnswer("d"); break;
      default: setAnswer(null); break;
    }
  };

  const handleClick = () => {
    if (!answer) return;
    quizSession.submitAnswer(answer);
    callback();
  };

  return (
    <div className={styles["main"]} >
      <span className={styles["question"]} >
        {question.question}
      </span>
      <fieldset className={styles["choices"]} >
        {question.answers.map((answer, i) =>
          <label key={i} className={styles["choices__label"]} >
            <input
              type="radio"
              name="quiz question"
              onChange={() => handleChange(i)}
              className={styles["choices__choice"]}
            />
            <span className={styles["choices__text"]}>
              {answer}
            </span>
          </label>
        )}
      </fieldset>
      <button onClick={handleClick} className={styles["btn"]} >
        Submit
      </button>
    </div>
  );
};


export default QuestionCard;