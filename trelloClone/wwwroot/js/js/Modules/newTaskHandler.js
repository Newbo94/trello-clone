"use strict";

var _TaskClass = require("../Task/TaskClass");

var _TaskClass2 = _interopRequireDefault(_TaskClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newTask = function newTask() {
    var taskItem = document.querySelector("[data-item]");
    var itemArr = [];
    taskItem.addEventListener("onfocus", function (e) {
        var target = e.currentTarget;
        var item = new _TaskClass2.default(target.value, 1);
        itemArr.push(item);
        console.log(itemArr);
    });
};
newTask();