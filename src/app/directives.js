angular.module('app').directive('required', function () {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {

            el.prev().html(function (i, html) {
                return html + '<sup class="red">*</sup>'
            })

        }
    }
}).directive('book', ['todosService', 'bus', '$rootScope', 'userSettings', function (todosService, bus, $rootScope, userSettings) {
    return {
        transclude: true,
        restrict: 'E',
        template: `
<div class="book">

    <h4 ng-click="color='red'" style="color: {{color}}">{{ item.id }}.{{ item.name || 'No Name' }}</h4>

    <small>Views: {{ item.views }}</small>
    <small>Price: {{ item.price | number }} {{currency }}</small>

   <!-- <button ng-click="addToBasket({item: item, views: item.views})" class="btn btn-default"><i class="fa fa-check"></i></button> -->
    <button ng-click="triggerEvent('bookAdded', item)" class="btn btn-default"><i class="fa fa-check"></i></button>

    before
    <div ng-transclude></div>
    after

</div>
        `,
        scope: {
            // item: '@', // scope.item = 'books[0]'
            item: '=bookData', // scope.item = { id, name, view }

            addToBasket: '&onAdd'

        },
        link: function (scope, el, attrs) {

            scope.$on('scope-event', function () {
                console.log('receiving a message from another book')
            })

            console.log(todosService)

            console.log(scope.item)

            // scope.id = attrs.id;
            // scope.name = attrs.name;
            // scope.views = attrs.views;

            scope.triggerEvent = function (event, data) {
                scope.$emit('scope-event');
                bus.emit(event, data);
            }

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
    .directive('basket', function () {
        return {
            restrict: 'E',
            scope: true,
            link: function (scope) {
                scope.$on('scope-event', function () {
                    console.log('listening from basket');
                })
            }
        }
    })