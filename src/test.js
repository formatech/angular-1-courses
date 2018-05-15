var template = `<div>
    <!-- <pre>{{ todos | json }}</pre> -->
    <form ng-submit="addNewTodo()">
        Add new task
        <input id="newTodo" type="text" ng-model="newTodo">
    </form>
    <p>
        <input placeholder="Search ..." type="text" ng-model="search">
    </p>
    <ul>
        <li ng-repeat="item in todos | filter:search" ng-class="{done : item.isDone}">
            <label>
                <input type="checkbox" ng-model="item.isDone">
                <span>{{ item.text | uppercase | mr }}</span>
                <span>{{ item.date | date }}</span>
            </label>
        </li>
    </ul>
</div>`;

var a = 1 + 3;

var b = false;

if (false) {
    console.log('hello');
}