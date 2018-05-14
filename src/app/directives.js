angular.module('app')
    .directive('required', function () {
        return {
            restrict: 'A',
            link: function ($scope, $el) {
                console.log($scope.$id);
                $el.prev('label').html((i, html) => html + ' <sup class="star">*</sup>')
                $el.css('borderColor', 'red');
            }
        };
    })
    .directive('list', function () {
        return {
            restrict: 'E',
            template: `
                <h1>{{ title }}</h1>

                <ul class="list-group">
                    <li ng-repeat="v in data"
                    ng-click="onClick({item: v, order: $index})" class="list-group-item">
                        {{ v }}
                        <button ng-click="onRemove({item: v})" type="button" class="btn btn-danger">X</button>
                    </li>
                </ul>
            `,
            scope: {
                title: '@',
                data: '=',
                onClick: '&',
                onRemove: '&',
            },
            link: function ($scope, $el) {
                console.log($scope.$id);
            }
        }
    })