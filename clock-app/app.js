var app = angular.module("clock-app", []);
app.controller("MainCtrl", getTimeFunc);

function getTimeFunc($scope) {
    var current_time = new Date();
    $scope.current_time = current_time.toTimeString();
    $scope.updateTime = function() {
        $scope.userName = "";
        var current_time = new Date();
        $scope.current_time = current_time.toTimeString();
    }
} 