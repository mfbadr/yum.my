(function(){
  'use strict';

  angular.module('yummy')
  .factory('Category', ['$http', function($http){


    function create(category){
      return $http.post('/categories', category);
    }

    function all(){
      return $http.get('/categories');
    }

    return {create:create, all:all};
  }]);
})();

