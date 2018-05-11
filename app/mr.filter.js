angular.module('app')
    .filter('mr', function mrFilter() {
        return function transformer(input) {
            return 'mr. ' + input;
        }
    });
