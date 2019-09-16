import Task from "../Task/TaskClass";

let newTask = () => {
  const taskItem: HTMLInputElement = document.querySelector("[data-item]");
  const itemArr: Array<Object> = [];

  taskItem.addEventListener("onfocus", e => {
    const target = <HTMLInputElement>e.currentTarget;

    const item: Object = new Task(target.value, 1);
    itemArr.push(item);
    console.log(itemArr);
  });
};

newTask();
