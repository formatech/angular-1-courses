angular.module('app')
    .controller('BooksCtrl', ['$scope', function ($scope) {

        $scope.status = 'solid';
        $scope.color = 'blue';

        $scope.books = [
            { id: 1, views: 100, name: 'Introduction to Angular' },
            { id: 2, views: 200, name: 'Introduction to C#' },
            { id: 3, views: 300, name: 'Introduction to Java' },
        ]

        $scope.otherBook = { id: 4, views: 100, name: 'Angular 6' };

    }]);