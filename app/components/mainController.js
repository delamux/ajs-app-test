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
    $http.get('https://jsonplaceholder.typicode.com/users')
        .then((data) => {
            vm.users = data.data
        });
}]);

const user = {
    name: 'Peter',
    last_name: 'Parker',
    age: 33,
    photo: 'assets/img/descarga.svg'
};
