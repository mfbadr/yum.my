(function(){
  'use strict';

  angular.module('yummy')
  .controller('NavCtrl', ['$scope', '$localForage', function($scope, $localForage){
    $localForage.getItem('email').then(function(email){
      $scope.email = email;
    });

    $scope.$on('authenticated', function(event, email){

      if(email === 'Anonymous'){email = null;
      }
      $localForage.setItem('email', email).then(function(){
        $scope.email = email;
      });
    });
  }]);
})();

