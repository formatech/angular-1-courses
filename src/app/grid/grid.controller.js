
angular.module('app')
    .controller('GridCtrl', ['$scope', function ($scope) {

        $scope.isDisabled = true;

        $scope.columns = [
            'id',
            'name',
            'currency',
            'date',
            'description',
        ];

        $scope.data = [
            {
                id: 1,
                name: 'gabi',
                currency: 'USD',
                date: new Date(),
                description: 'Aliqua quis minim dolore in quis pariatur fugiat.',
            },
            {
                id: 2,
                name: 'maroun',
                currency: 'LBP',
                date: new Date(),
                description: 'Elit ad velit excepteur ipsum Lorem proident eu.',
            },
            {
                id: 3,
                name: 'Michel',
                currency: 'EUR',
                date: new Date(),
                description: 'Esse commodo excepteur esse cillum velit laboris ex ex irure enim incididunt exercitation et.',
            },
            {
                id: 4,
                name: 'AHMAD',
                currency: 'EUR',
                date: new Date(),
                description: 'Mollit ad labore veniam consectetur.',
            },
        ];

    }]);