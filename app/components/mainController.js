app.controller('mainCtrl', function() {
    const vm = this;
    vm.topMenu = 'app/shared/topMenu/topMenuView.html';

    vm.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
});
