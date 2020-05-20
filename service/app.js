var app =angular.module("app", []);

// Controller 
app.controller("emp", ['$scope', "calcFactory", function($scope, calcFactory){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function() {
        // $scope.sum = parseInt($scope.a) + parseInt($scope.b);
        $scope.sum = calcFactory.getSum($scope.a, $scope.b);
    };
}]);


// Factory 
app.factory("calcFactory", ["$http","$log", function($http, $log){
    $log.log("instantiating calcFactory");
    var oCalcService = {};
    oCalcService.getSum = function(a,b) {
        return parseInt(a)+parseInt(b);
    };
    return oCalcService;
}]);