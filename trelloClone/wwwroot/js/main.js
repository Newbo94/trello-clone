var Task = /** @class */ (function () {
    function Task(taskTitle) {
        taskTitle;
    }
    return Task;
}());
var newTask = function () {
    var taskItem = document.querySelector("[data-drag-target]");
    taskItem.addEventListener("click", function () {
        var item = new Task("Task 1");
        console.log(item);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd3d3Jvb3QvQ29udGVudC9TY3JpcHRzL09iamVjdHMvVGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNFLGNBQVksU0FBaUI7UUFDM0IsU0FBUyxDQUFDO0lBQ1osQ0FBQztJQUNILFdBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUVELElBQUksT0FBTyxHQUFHO0lBQ1osSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRTlELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRhc2tUaXRsZTogc3RyaW5nKSB7XG4gICAgdGFza1RpdGxlO1xuICB9XG59XG5cbmxldCBuZXdUYXNrID0gKCkgPT4ge1xuICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kcmFnLXRhcmdldF1cIik7XG5cbiAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgaXRlbSA9IG5ldyBUYXNrKFwiVGFzayAxXCIpO1xuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICB9KTtcbn07XG4iXX0=
