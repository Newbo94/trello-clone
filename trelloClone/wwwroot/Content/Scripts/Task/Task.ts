class Task {
  constructor(taskTitle: string) {
    taskTitle;
  }
}

let newTask = () => {
  const taskItem = document.querySelector("[data-drag-target]");

  taskItem.addEventListener("click", () => {
    let item = new Task("Task 1");
    console.log(item);
  });
};
