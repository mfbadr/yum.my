
(function(){
  'use strict';

  angular.module('yummy')
  .controller('BookmarksCtrl', ['$scope', '$location','Category','Bookmark', function($scope, $location, Category, Bookmark){
    $scope.title = 'Bookmarks';
    $scope.categories = [];
    $scope.bookmark = {};
    $scope.bookmarks = [];

    Bookmark.all().then(function(response){
      $scope.bookmarks = response.data.bookmarks;
    });


    Category.all().then(function(response){
      $scope.categories = response.data.categories;
    });

    $scope.category = {};

    $scope.addCategory = function(){
      Category.create($scope.category).then(success, failure);
      $scope.categories.push($scope.category);
      $scope.category = {};
    };


    $scope.addBookmark = function(){
      Bookmark.create($scope.bookmark).then(function(){
        toastr.success('You added a bookmark');
        $scope.bookmarks.push($scope.bookmark);
        $scope.bookmark = {};
      });
    };

    function success(response){
      toastr.success('You added a category');
    }

    function failure(response){
      toastr.error('Category already exists');
    }

  }]);
})();

