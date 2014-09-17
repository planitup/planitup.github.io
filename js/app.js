var planitup = angular.module('planitup', ['mgcrea.ngStrap', 'ngAnimate', 'ngSanitize']);

planitup.controller("MainCtrl", function ($scope) {
    $scope.aside = {
        "title": "Chat",
        "content": ' '
    };
});

planitup.controller("loginController", function ($scope, $window) {
    $scope.loginComplete = function(){
        $window.location.href = "index.html";
    };
});