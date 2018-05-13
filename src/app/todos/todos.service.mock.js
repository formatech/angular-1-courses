angular.module('app')
    .factory('todosServiceMock', ['$timeout', function ($timeout) {

        return {
            getTodos: function () {

                return $timeout(() =>
                    [
                        {
                            id: 1,
                            text: "Mock aut autem",
                            isDone: false
                        },
                        {
                            id: 2,
                            text: "quis ut nam facilis et officia qui",
                            isDone: false
                        },
                        {
                            id: 3,
                            text: "fugiat veniam minus",
                            isDone: false
                        },
                        {
                            id: 4,
                            text: "et porro tempora",
                            isDone: true
                        },
                    ], 1500);

            }
        }

    }]);
