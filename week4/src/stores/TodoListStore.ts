import { action, makeObservable, observable } from "mobx";

export interface Task {
  id: number,
  name: string,
  done: boolean,
}

class TodoListStore {

  tasks: Task[] = [];
  inputString: string = "";
  private currentID = 0;

  constructor() {
    makeObservable(this, {
      tasks: observable,
      inputString: observable,
      addTask: action,
      removeTask: action,
      setInputString: action,
      setTaskDone: action,
    });
  }

  addTask(name: string) {
    if (name === "") {
      alert("please enter a task");
      return;
    }
    const newTask = {
      name: name,
      done: false,
      id: this.currentID
    };

    this.tasks.push(newTask);
    this.currentID++;
    this.setInputString("");
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  setInputString(newValue: string) {
    this.inputString = newValue;
  }

  setTaskDone(id: number, newValue: boolean) {
    this.tasks.filter(task => task.id === id)[0].done = newValue;
  }
}


export default TodoListStore;