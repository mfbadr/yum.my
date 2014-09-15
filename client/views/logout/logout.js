
(function(){
  'use strict';

  angular.module('yummy')
  .controller('logoutCtrl', ['$location','User', function($location, User){
    User.logout().then(function(){
      toastr.success('You are now logged out!');
      $location.path('/');
    });

  }]);
})();

