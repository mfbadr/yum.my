(function(){
  'use strict';

  angular.module('yummy', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider','$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login', {templateUrl:'/views/login/login.html', controller:'loginCtrl'})
    .when('/logout', {templateUrl:'/views/logout/logout.html', controller:'logoutCtrl'})
    .when('/bookmarks', {templateUrl:'/views/bookmarks/bookmarks.html', controller:'BookmarksCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'yummy', storeName:'cache',  version:1.0});
  }]);
})();

