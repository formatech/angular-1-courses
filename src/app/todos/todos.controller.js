
angular.module('app')
    .controller('todosCtrl', [
        '$scope', 'todosService', 'filterFilter', function ($scope, myTodos, filterFilter) {

            console.log(filterFilter(['ahmad', 'maroun', 'mikel'], 'a'));

        // console.log(mrFilter('gabi', 'mikeal'), $scope.$id);

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