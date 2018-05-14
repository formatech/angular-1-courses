var app = angular.module('app', /* here i put module dependencies */['ngRoute'])
    .run(['$templateCache', function ($templateCache) {
        // $templateCache.put('/views/todos.html', `
        //     <h1>My Todos Template 🤦🏻‍♂</h1>
        // `)
    }]);