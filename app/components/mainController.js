app.controller('mainCtrl', ['$http', function($http) {
    const vm = this;
    vm.user = user;
    vm.updating = {};
    vm.users = [];

    vm.update = function () {
        angular.copy(this.user, this.updating);
    };

    vm.save = function () {
        angular.copy(vm.updating, vm.user);
    };

    vm.cancel = function () {
        vm.updating = {};
    };
}]);
