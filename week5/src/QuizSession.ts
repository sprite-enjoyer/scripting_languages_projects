import { Answer, Question } from "./types";

// This class encapsulates the logic of a quiz session, maintaining the current state of the session, including the current question number, the number of correct answers, and the quiz questions data.

// The class defines a constructor to initialize the quiz data, a getQuestion method to return the next question, a submitAnswer method to process a user's submitted answer, and a getQuizSummaryText method to return a summary of the quiz session results.

// The resetSession method is used to reset the quiz session's state, allowing the quiz to be retaken.

class QuizSession {

  private data: Question[];
  questionNumber = 0;
  correctAnswerCount = 0;

  constructor(data: Question[]) {
    this.data = data;
    //set data once the object is created, in other cases, one can also fetch data here if !data is true.
  }

  getQuestion() {
    return {
      question: this.data[this.questionNumber],
      last: this.data.length === this.questionNumber
    };
  }

  submitAnswer(submittedAnswer: Answer) {
    const answer = this.data[this.questionNumber].correct;
    if (answer === submittedAnswer) this.correctAnswerCount++;
    this.questionNumber = this.questionNumber + 1;
  }

  getQuizSummaryText() {
    return `you answered correctly at ${this.correctAnswerCount}/${this.data.length} questions.`;
  }

  resetSession() {
    this.questionNumber = 0;
    this.correctAnswerCount = 0;
  }

}

export default QuizSession;