import Task from "../Task/TaskClass";
let newTask = () => {
    const taskItem = document.querySelector("[data-item]");
    const itemArr = [];
    taskItem.addEventListener("onfocus", e => {
        const target = e.currentTarget;
        const item = new Task(target.value, 1);
        itemArr.push(item);
        console.log(itemArr);
    });
};
newTask();
