var planitup = angular.module('planitup', ['ui.bootstrap', 'mgcrea.ngStrap', 'ngAnimate', 'ngSanitize']);

planitup.controller("MainCtrl", function ($scope) {
    $scope.chatAside = {
        "title": "Chat",
        "content": ' '
    };
    $scope.isCollapsed = true;
});

planitup.controller("loginController", function ($scope, $window) {
	var BLANK_INPUT_CLASS = "blank";
    var USERNAME_DEFAULT = "Username ";
    var PASSWORD_DEFAULT = "Password ";
    $scope.username = USERNAME_DEFAULT;
    $scope.password = PASSWORD_DEFAULT;
    var usernameInput = document.getElementById("userName");
    var passwordInput = document.getElementById("passwordinput");
	
    $scope.loginComplete = function(){
        $window.location.href = "index.html";
    };
	
	$scope.login = function() {
	      if(usernameInput.value != "" && usernameInput.value != USERNAME_DEFAULT && 
                passwordInput.value != "" && passwordInput.value != PASSWORD_DEFAULT) {

                $scope.username = usernameInput.value;
                $scope.password = passwordInput.value;

                var authURL = configService.firstBaseURL + "auth?username=" + $scope.username + "&password=" + $scope.password + 
                    "&format=jsonp&callback=JSON_CALLBACK";

                $http.jsonp(authURL).then(
                    function (response) {
                        authService.userAuthorized = true;
						$window.location.href = "index.html";
                        //$location.path('/home');
                    },
                    function (response) {
                        alertService.alert("There was a problem logging in.  Please try again.", "Oops!")
                    }
                );
            }
            else {
                alertService.alert("Please enter both your username and password.", "Oops!")
            }
	
	
	};
	
});