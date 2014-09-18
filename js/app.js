var planitup = angular.module('planitup', ['ui.bootstrap', 'mgcrea.ngStrap', 'ngAnimate', 'ngSanitize']);

planitup.controller("MainCtrl", function ($scope) {
    $scope.chatAside = {
        "title": "Chat",
        "content": ' '
    };
    $scope.isCollapsed = true;
});

planitup.controller("loginController", function ($scope, $window) {
    $scope.loginComplete = function(){
        $window.location.href = "index.html";
    };
});