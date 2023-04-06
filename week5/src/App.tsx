import QuestionCard from "./QuestionCard";
import QuizSession from "./QuizSession";
import styles from "./styles/app.module.scss";
import questions from "./questions";
import { useState } from "react";
import { Question } from "./types";

// This is a Typescript React code that renders a quiz using a QuestionCard component and a QuizSession class.

// It imports CSS styles and a questions array, and initializes two states using useState.

// The App component defines a callback function to get the next question and update the states, and a handleClick function to reset the quiz.

// The return statement renders a QuestionCard or a summary based on the value of last.


const quizSession = new QuizSession(questions);

const App = () => {
  const [question, setQuestion] = useState<Question>(quizSession.getQuestion().question);
  const [last, setLast] = useState(false);

  const callback = () => {
    const { question, last } = quizSession.getQuestion();
    setLast(last);
    setQuestion(question);
  };

  const handleClick = () => {
    quizSession.resetSession();
    setQuestion(quizSession.getQuestion().question);
    setLast(false);
  };

  return (
    <div className={styles["main"]} >
      {!last ?
        <QuestionCard
          callback={callback}
          question={question}
          quizSession={quizSession}
        />
        :
        <div className={styles["summary-div"]} >
          <b>
            {quizSession.getQuizSummaryText()}
          </b>
          <button onClick={handleClick} className={styles["summary-div__reload-btn"]} >
            Reload
          </button>
        </div>
      }
    </div>
  );
}

export default App;