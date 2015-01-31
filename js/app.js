var app = angular.module("256pxapp", ['ngRoute']);

app.controller("mainController", function($scope) {
  $scope.appName = '256px';
  $scope.appDomain = 'beta.256px.io';
});

app.config(function($routeProvider) {
    $routeProvider.when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })
});
