define("Task/TaskClass", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Task = /** @class */ (function () {
        function Task(taskTitle, taskID) {
            this.taskTitle = taskTitle;
            this.taskID = taskID;
        }
        return Task;
    }());
    exports["default"] = Task;
});
define("Modules/newTaskHandler", ["require", "exports", "Task/TaskClass"], function (require, exports, TaskClass_1) {
    "use strict";
    exports.__esModule = true;
    var newTask = function () {
        var taskItem = document.querySelector("[data-item]");
        var itemArr = [];
        taskItem.addEventListener("onfocus", function (e) {
            var target = e.currentTarget;
            var item = new TaskClass_1["default"](target.value, 1);
            itemArr.push(item);
            console.log(itemArr);
        });
    };
    newTask();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd3d3Jvb3QvQ29udGVudC9TY3JpcHRzL1Rhc2svVGFza0NsYXNzLnRzIiwid3d3cm9vdC9Db250ZW50L1NjcmlwdHMvTW9kdWxlcy9uZXdUYXNrSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUtFLGNBQVksU0FBaUIsRUFBRSxNQUFjO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFDSCxXQUFDO0lBQUQsQ0FUQSxBQVNDLElBQUE7Ozs7OztJQ1BELElBQUksT0FBTyxHQUFHO1FBQ1osSUFBTSxRQUFRLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekUsSUFBTSxPQUFPLEdBQWtCLEVBQUUsQ0FBQztRQUVsQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQztZQUNwQyxJQUFNLE1BQU0sR0FBcUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUVqRCxJQUFNLElBQUksR0FBVyxJQUFJLHNCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixPQUFPLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIHRhc2tUaXRsZTogc3RyaW5nO1xuICB0YXNrSUQ6IG51bWJlcjtcbiAgaXNEb25lOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHRhc2tUaXRsZTogc3RyaW5nLCB0YXNrSUQ6IG51bWJlcikge1xuICAgIHRoaXMudGFza1RpdGxlID0gdGFza1RpdGxlO1xuICAgIHRoaXMudGFza0lEID0gdGFza0lEO1xuICB9XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi4vVGFzay9UYXNrQ2xhc3NcIjtcblxubGV0IG5ld1Rhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tJdGVtOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWl0ZW1dXCIpO1xuICBjb25zdCBpdGVtQXJyOiBBcnJheTxPYmplY3Q+ID0gW107XG5cbiAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm9uZm9jdXNcIiwgZSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZS5jdXJyZW50VGFyZ2V0O1xuXG4gICAgY29uc3QgaXRlbTogT2JqZWN0ID0gbmV3IFRhc2sodGFyZ2V0LnZhbHVlLCAxKTtcbiAgICBpdGVtQXJyLnB1c2goaXRlbSk7XG4gICAgY29uc29sZS5sb2coaXRlbUFycik7XG4gIH0pO1xufTtcblxubmV3VGFzaygpO1xuIl19
