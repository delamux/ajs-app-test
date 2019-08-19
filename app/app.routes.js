const componentsUrl = 'app/components';
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: `${componentsUrl}/home/homeView.html`
        })
        .when('/users', {
            templateUrl: `${componentsUrl}/user/userView.html`
        })
        .otherwise({
            redirectTo: '/'
        })
});
