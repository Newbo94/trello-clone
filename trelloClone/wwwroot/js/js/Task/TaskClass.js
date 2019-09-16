"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task(taskTitle, taskID) {
    _classCallCheck(this, Task);

    this.taskTitle = taskTitle;
    this.taskID = taskID;
};

exports.default = Task;