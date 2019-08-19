app.controller('userCtrl', ['$http', function($http) {
    const vm = this;
    vm.updating = {};
    vm.users = [];

    $http.get('/api/users')
        .then((data) => {
            vm.users = data.data.users
        });
}]);
