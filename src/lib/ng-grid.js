angular.module('ngGrid', [])

    .directive('smallGrid', function () {
        return {
            restrict: 'E',
            scope: {},
            template: `
            SMALL GRID HEADER
                    <div ng-if="isDisabled">disabled</div>
            SMALL GRID FOOTER
            `
        }
    })

    .directive('grid', function () {
        return {
            transclude: true,
            restrict: 'E',
            scope: {
                columns: '=',
                data: '=',
                // onFilter: '&'
            },
            controller: ['$scope', function ($scope) {
                console.log($scope);

                var childControllers = {};

                this.registerController = function (name, controller) {
                    childControllers[name] = controller
                }

                $scope.printControllers = function () {
                    console.log(childControllers)
                }

                this.applyFilter = function (filter) {
                    console.log('I should apply the filter');
                    console.log(filter);

                    $scope.data = filterFunction($scope.data, filter)

                }
            }],
            template: `
                <button ng-click="printControllers()">s c<button>
                <div ng-transclude></div>
            `
        }
    })
    .directive('footer', function () {
        return {
            restrict: 'E',
            template: `
                GRID FOOTER
            `
        }
    })
    .directive('gridTable', function () {
        return {
            restrict: 'E',
            controller: ['$scope', function ($scope) {

                console.log($scope.data);

            }],
            template: `
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th ng-repeat="col in columns">{{ col }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="row in data">
                            <td ng-repeat="col in columns">{{ row[col] }}</td>
                        </tr>
                    </tbody>
                </table>

            `
        }
    })
    .directive('filter', function () {
        return {
            require: '^grid',
            restrict: 'E',
            link: function (scope, el, attr, gridController) {
                scope.model = {};

                gridController.registerController('filter', this);

                scope.filter = function () {
                    gridController.applyFilter(scope.model);
                }
            },
            template: `
                <table>
                    <pre>{{ model | json }}</pre>
                    <tr ng-repeat="col in columns">
                        <td>{{ col }}</td>
                        <td>
                            <select ng-model="model[col].operation">
                                <option>></option>
                                <option><</option>
                                <option>=</option>
                                <option>!=</option>
                            </select>
                        </td>
                        <td>
                            <input type="text" ng-model="model[col].value" />
                        </td>
                    </tr>
                </table>


                <button class="btn btn-default" ng-click="filter()">Filter</button>
            `
        }
    })
