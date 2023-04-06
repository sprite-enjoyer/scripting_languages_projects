import TodoList from "./components/TodoList";
import styles from "./styles/app.module.scss";

const App = () => {

  return (
    <div className={styles["main"]} >
      <TodoList />
    </div>
  );
}

export default App;
