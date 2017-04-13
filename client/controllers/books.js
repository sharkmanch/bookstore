var myApp = angular.module('myApp');
//scope is basically the thing that binds controller to the view which allows you to pass things back and forward with angular to a data binding system
//$http is to post  req and get request to our api
//$location deals with redirection
//$routeParams to get var sth like that?
myApp.controller('BooksController',['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('BooksController loaded...');

    $http.get('/api/books').success(function (response) {
        $scope.books = response;
    });

}]);