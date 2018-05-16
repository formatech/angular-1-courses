
angular.module('app')
    .controller('todosCtrl', ['$scope', 'todosService', function ($scope, myTodos) {

        console.log($scope.$id);

        myTodos.getTodos().then(function (todos) {
            $scope.todos = todos;
        });

        $scope.addNewTodo = function () {

            var text = $scope.newTodo;

            $scope.todos.push({
                text: plural(text),
                isDone: false
            });

            $scope.newTodo = '';

        }

    }]);