
(function(){
  'use strict';

  angular.module('yummy')
  .controller('RegisterCtrl', ['$scope', '$location','User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('You are now registered!');
      $location.path('/login');
    }

    function failure(response){
      toastr.error('Email is already registered or password is too short. Please try again.');
      $scope.user = {};
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };

  }]);
})();

