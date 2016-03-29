angular.module('todoApp', [])
.controller('TodoListController', function() {
  var todoList = this;
  todoList.todos = [
    {text: 'Buy milk', done: true},
    {text: 'Do 100 pushups', done: false}
  ];

  todoList.addTodo = function() {
    if(todoList.todoText) {
      console.log(todoList.todoText);
      todoList.todos.push({text: todoList.todoText, done: false});
    } else {
      alert("Wait, you haven't enter any todos yet!");
    }
   
    todoList.todoText = '';
  };

  todoList.remaining = function() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = function() {
    var oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) todoList.todos.push(todo);
    });
  };
});
