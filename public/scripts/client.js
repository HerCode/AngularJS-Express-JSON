var app = angular.module('OlympicsApp', []);

app.controller('MainController', function($scope, $http) {

  $scope.test = "Get Athletes!";

  $scope.archery = '';
  $scope.canoekayak = '';
  $scope.modpent = '';
  $scope.syncswim= '';
  $scope.taekwondo = '';

  $scope.genRandomAthlete = function() {
    $http.get('/Olympics/archery')
    .then(function(response){
    $scope.archery = response.data.Name + ' from ' + response.data.Origin;
    });
    $http.get('/Olympics/canoekayak')
    .then(function(response){
    $scope.canoekayak = response.data.Name + ' from ' + response.data.Origin;
    });
    $http.get('/Olympics/modpent')
    .then(function(response){
    $scope.modpent = response.data.Name + ' from ' + response.data.Origin;
    });
    $http.get('/Olympics/syncswim')
    .then(function(response){
    $scope.syncswim = response.data.Name + ' from ' + response.data.Origin;
    });
    $http.get('/Olympics/taekwondo')
    .then(function(response){
    $scope.taekwondo = response.data.Name + ' from ' + response.data.Origin;
    });

  };

});
