app.controller('mainCtrl', function($scope) {
    $scope.user = user;
    $scope.updating = {};

    $scope.update = function () {
        angular.copy($scope.user, $scope.updating);
    };

    $scope.save = function () {
        angular.copy($scope.updating, $scope.user);
    };

    $scope.cancel = function () {
        $scope.updating = {};
    }
});

const user = {
    name: 'Peter',
    last_name: 'Parker',
    age: 33,
    photo: 'assets/img/descarga.svg'
};
