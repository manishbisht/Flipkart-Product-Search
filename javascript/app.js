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
            if($scope.query){
                console.log($scope.query);
                /*$http.defaults.headers.common['Fk-Affiliate-Id'] = 'bestshopp';
                $http.defaults.headers.common['Fk-Affiliate-Token'] = '21719d092a4c47bba14ee26dc9726988';
                $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';*/
                $http({
                    method : "GET",
                    url : "https://affiliate-api.flipkart.net/affiliate/search/json?resultCount=10&query="+$scope.query,
                    headers: {
                        'Fk-Affiliate-Id': 'bestshopp',
                        'Fk-Affiliate-Token': '21719d092a4c47bba14ee26dc9726988',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Origin'
                    }
                }).success(function mySucces(response) {
                    console.log(response.data);
                });
            }

        }
    });
})();
