
angular.module('app')
    .controller('todosCtrl', ['$scope', 'todosService', function ($scope, myTodos) {

        console.log($scope.$id);

        myTodos.getTodos().then(function (todos) {
            $scope.todos = todos;
        });

        $scope.list = [
            'a',
            'b',
            'c',
            'd',
        ];

        $scope.onClick = function (row, index) {
            console.log(row, index);
        }

        $scope.onRemove = function (item) {
            $scope.list = $scope.list.filter(x => x !== item);
        }


        $scope.addNewTodo = function () {

            var text = $scope.newTodo;

            $scope.todos.push({
                text: text,
                isDone: false
            });

            $scope.newTodo = '';

        }

    }]);