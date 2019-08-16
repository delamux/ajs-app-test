app.controller('userCtrl', ['$http', function($http) {
    const vm = this;
    vm.user = user;
    vm.updating = {};
    vm.users = [];

    $http.get('https://jsonplaceholder.typicode.com/users')
        .then((data) => {
            vm.users = data.data
        });
}]);
