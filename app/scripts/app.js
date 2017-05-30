'use strict';

/**
 * @ngdoc overview
 * @name ngmaterialApp
 * @description
 * # ngmaterialApp
 *
 * Main module of the application.
 */
angular.module('ngmaterialApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ngMaterial',
  'ui.router',
  'ngMdIcons'
]).config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    views: {
      'header': {
        templateUrl: 'views/partials/header.html',
        controller: 'MainCtrl'
      },
      'footer': {
        templateUrl: 'views/partials/footer.html',
        controller: 'MainCtrl'
      },
      'sidenav': {
        templateUrl: 'views/partials/sidenav.html',
        controller: 'MainCtrl'
      }
    }
  }).state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }
    }
  }).state('app.clerical', {
    url: '/clerical',
    views: {
      'menuContent': {
        templateUrl: 'views/nonvoice/clerical.html',
        controller: 'NonvoiceCtrl'
      }
    }
  }).state('app.aptitude', {
    url: '/aptitude',
    views: {
      'menuContent': {
        templateUrl: 'views/nonvoice/aptitude.html',
        controller: 'NonvoiceCtrl'
      }
    }
  }).state('app.writer', {
    url: '/writer',
    views: {
      'menuContent': {
        templateUrl: 'views/writer/main.html',
        controller: 'WriterCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/home');
})
