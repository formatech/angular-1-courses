angular.module('app')
    .factory('bus', function () {

        var global = new Bus();
        return global;

    })
    .controller('BooksCtrl', ['$scope', '$rootScope', 'bus', function ($scope, $rootScope, bus) {

        // $rootScope.currency = 'USD';

        $scope.booksAdded = [];

        $scope.status = 'solid';
        $scope.color = 'blue';

        $scope.books = [
            { id: 1, views: 100, name: 'Introduction to Angular', price: 11 },
            { id: 2, views: 200, name: 'Introduction to C#', price: 22 },
            { id: 3, views: 300, name: 'Introduction to Java', price: 33 },
        ]

        $scope.otherBook = { id: 4, views: 100, name: 'Angular 6' };

        $scope.onBookAdded = function (item, views) {

            console.log(item, views);

            $scope.booksAdded.push({ name: item.name, views: item.views });

            // console.log('a new message from book directive with: on book added ');
        }

        $scope.$on('scope-event', function () {
            console.log('event from directive');
        })

        bus.subscribe('bookAdded', function (item) {
            console.log('book added');

            $scope.booksAdded.push({ name: item.name, views: item.views });
        })

    }]);