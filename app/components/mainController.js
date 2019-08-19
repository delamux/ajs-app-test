app.controller('mainCtrl',['$location', function($location) {
    const vm = this;
    vm.topMenu = 'app/shared/topMenu/topMenuView.html';

    vm.getClass = function (path) {
        let rootClass = 'nav-item';

        return ($location.path().substr(0, path.length) === path) ? `${rootClass} active` : rootClass;
    }
}]);
