
(function(){
  'use strict';

  angular.module('yummy')
  .controller('loginCtrl', ['$scope', '$location','User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('You are now logged in!');
      $location.path('/');
    }

    function failure(response){
      toastr.error('Email or password is incorrect');
      $scope.user = {};
    }

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };

  }]);
})();

