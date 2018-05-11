
angular.module('app')
    .controller('todosCtrl', ['$scope', 'todosService', function ($scope, myTodos) {

        myTodos.getTodos().then(function (todos) {
            $scope.todos = todos;
        });


        $scope.addNewTodo = function () {

            var text = $scope.newTodo;

            $scope.todos.push({
                text: text,
                isDone: false
            });

            $scope.newTodo = '';

        }

    }]);