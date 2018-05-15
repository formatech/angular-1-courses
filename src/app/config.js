angular.module('app')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when('/todos', {
            controller: 'todosCtrl',
<<<<<<< HEAD
            templateUrl: 'views/todos.html'
=======
            templateUrl: `/views/todos.html`
>>>>>>> session-03
        }).when('/', {
            redirectTo: '/todos'
        }).when('/books', {
            template: `BOOKS TEMPLATE`
        });
<<<<<<< HEAD

    }])
    .run(['$templateCache', function ($templateCache) {

        $templateCache.put('views/todos.html', 'TODO TMEPLTA')

=======
>>>>>>> session-03
    }]);