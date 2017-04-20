/**
 * Created by manish on 17/4/17.
 */
/**
 * You must include the dependency on 'ngMaterial'
 */
// Immediately Invoked function expression
(function () {
    var app = angular.module('FlipkartProductSearchApp', ['ngMaterial']);
    app.controller('searchCtrl', function ($scope, $http){
        $scope.search = function () {
            $scope.products = '';
            $scope.loading = true;
            if($scope.query){
                console.log($scope.query);
                $http({
                    method : "GET",
                    url : "https://c0yllzk47a.execute-api.us-east-1.amazonaws.com/v1?query="+$scope.query
                }).success(function mySucces(response) {
                    console.log(JSON.parse(response));
                    $scope.data = JSON.parse(response);
                    $scope.loading = false;
                });
            }
        }
    });
})();
