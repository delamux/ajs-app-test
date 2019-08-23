const componentsUrl = 'app/components';
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: `${componentsUrl}/home/homeView.html`
        })
        .when('/users', {
            templateUrl: `${componentsUrl}/user/userView.html`
        })
        .when('/users/add', {
            templateUrl: `${componentsUrl}/user/addUserView.html`,
        })
        .otherwise({
            redirectTo: '/'
        })
});
