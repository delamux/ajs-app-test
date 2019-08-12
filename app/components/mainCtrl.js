app.controller('mainCtrl', function() {
    this.user = user;
    this.updating = {};

    this.update = function () {
        angular.copy(this.user, this.updating);
    };

    this.save = function () {
        angular.copy(this.updating, this.user);
    };

    this.cancel = function () {
        this.updating = {};
    }
});

const user = {
    name: 'Peter',
    last_name: 'Parker',
    age: 33,
    photo: 'assets/img/descarga.svg'
};
