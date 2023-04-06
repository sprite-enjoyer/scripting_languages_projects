import { observer } from "mobx-react";
import { ChangeEvent, KeyboardEventHandler, useEffect, useRef } from "react";
import TodoListStore from "../stores/TodoListStore";
import styles from "../styles/taskAdder.module.scss";

export interface TaskAdderProps {
  store: TodoListStore,
}

// This is a React component called TaskAdder that receives a single prop of type 
// TodoListStore and is responsible for allowing the user to add new tasks to the todo list. 
// It uses the observer higher-order component from the mobx-react library to automatically 
// re-render when the store changes. The component renders an input field and a button, and the
//  handleButtonClick and keyDownHandler are callback functions that add a new task to the store 
//  and clear the input field. The handleOnChange function updates the store with the input field value. 
//  The useEffect hook is used to set the focus on the input field after the component is mounted 
//  or when the tasks property of the store changes.

const TaskAdder = ({ store }: TaskAdderProps) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    store.addTask(store.inputString);
    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
  }
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => store.setInputString(e.target.value);
  const keyDownHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      store.addTask(store.inputString);
      if (inputRef.current?.value) {
        inputRef.current.value = "";
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus;
  }, [store.tasks]);

  return (
    <div className={styles["main"]} >
      <input
        ref={inputRef}
        onKeyDown={keyDownHandler}
        onChange={handleOnChange}
        className={styles["main__input"]}
        placeholder="Enter a new task..."
      />
      <button
        onClick={handleButtonClick}
        className={styles["main__btn"]}
      >
        Add Task
      </button>
    </div>
  );
};


export default observer(TaskAdder);
