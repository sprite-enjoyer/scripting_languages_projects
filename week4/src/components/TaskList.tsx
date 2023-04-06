import { observer } from "mobx-react";
import TodoListStore, { Task } from "../stores/TodoListStore";
import styles from "../styles/taskList.module.scss";
import TaskComponent from "./Task";

// This is a React component called TaskList that receives a prop of type TodoListStore 
// and renders a list of tasks using the TaskComponent. It uses the observer higher-order 
// component from the mobx-react library to automatically re-render when the store changes.

export interface TaskListStore {
  store: TodoListStore,
}

const TaskList = ({ store }: TaskListStore) => {

  return (
    <div className={styles["main"]} >
      {
        store.tasks.map((task: Task) =>
          <div key={task.id} className={styles["main__task"]} >
            <TaskComponent
              task={task}
              store={store}
            />
          </div>
        )
      }
    </div>
  );
};

export default observer(TaskList);