var Task = /** @class */ (function () {
    function Task(taskTitle) {
        taskTitle;
    }
    return Task;
}());
var newTask = function () {
    var taskItem = document.querySelector("[data-item]");
    taskItem.addEventListener("click", function (e) {
        var target = e.currentTarget;
        console.log(target);
        var item = new Task("Task 1");
        console.log(item);
    });
};
//# sourceMappingURL=Task.js.map