angular.module('app')
    .factory('todosService', ['$http', function ($http) {

        return {
            getTodos: function () /* Promise */ {
                return $http.get('/api/todos.json')
                    .then(response => response.data)
            }
        }

    }]);
