angular.module('app')
    .directive('kkkrequired', function () {
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
            scope: false,
            link: function ($scope, $el) {
                console.log($scope.$id);
            }
        }
    })

angular.module('app').directive('required', function () {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {

            el.prev().html(function (i, html) {
                return html + '<sup class="red">*</sup>'
            })

        }
    }
}).directive('book', ['todosService', function (todosService) {
    return {
        restrict: 'E',
        template: `
<div class="book">
    <h4 ng-click="color='red'" style="color: {{color}}">{{ item.id }}.{{ item.name || 'No Name' }}</h4>
    <small>Views: {{ item.views }}</small>
</div>
        `,
        scope: {
            // item: '@', // scope.item = 'books[0]'
            item: '=', // scope.item = { id, name, view }
        },
        link: function (scope, el, attrs) {

            console.log(todosService)

            console.log(scope.item)

            // scope.id = attrs.id;
            // scope.name = attrs.name;
            // scope.views = attrs.views;

        }
    }
}]).directive('outOfStock', function () {
    return {
        restrict: 'A',
        link: function (scope, el) {

            el.find('.book').css('border', '1px solid red');

            el.click(function () {
                alert('Out of stock item');
                return false;
            });
        }
    }
})
    .directive('shareable', function () {
        return {
            restrict: 'A',
            link: function (scope, el) {
                el.append('<button>Share</button>');
            }
        }
    })

    .directive('bcol', ['mrFilter', function (mrFilter) {
        return {
            replace: true,
            restrict: 'E',
            template: '<div class="col-md-3">{{ text }}</div>',
            link: function (scope, el) {
                scope.text = mrFilter(new Date().getFullYear());
            }
        }
    }])