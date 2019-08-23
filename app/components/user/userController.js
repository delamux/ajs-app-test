app.controller('userCtrl', ['$http', '$route', function($http, $route) {
    const vm = this;
    vm.updating = {};
    vm.users = [];
    vm.first_name = null;
    vm.last_name = null;
    vm.age = null;

    if ($route.current.$$route.originalPath === '/users' ) {
        $http.get('/api/users')
            .then((data) => {
                vm.users = data.data.users
            });
    }

    vm.addNewUser = function () {
        $http.post('/api/users/add', {
            first_name: vm.first_name,
            last_name: vm.last_name,
            age: vm.age,
        }).then((data) => {
            console.log(data);
        });
    }
}]);
