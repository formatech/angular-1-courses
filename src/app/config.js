angular.module('app')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when('/todos', {
            controller: 'todosCtrl',
            templateUrl: `/views/todos.html`
        }).when('/', {
            redirectTo: '/todos'
        }).when('/books', {
            template: `BOOKS TEMPLATE`
        });
    }]);