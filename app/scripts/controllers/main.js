'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
.controller('MainCtrl', [
  '$scope',
  '$location',
  '$mdSidenav',
  '$mdToast',
  function($scope, $location, $mdSidenav, $mdToast) {
    $scope.goHome = function() {
      $location.path('/app/home');
    };

    $scope.goClerical = function() {
      $location.path('/app/clerical');
    };

    $scope.goAptitude = function() {
      $location.path('/app/aptitude');
    };

    $scope.goWriter = function() {
      $location.path('/app/writer');
    };

    $scope.toggleSidenav = function() {
      $mdSidenav('left').toggle();
    };

    $scope.toastMessage = 'Hello There!';

    $scope.showToast = function(message) {
      var toast = $mdToast.simple().content(message).action('Close').highlightAction(true).position('top right');

      $mdToast.show(toast);
    };
  }
]);
