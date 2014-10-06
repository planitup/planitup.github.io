var planitup = angular.module('planitup', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'mgcrea.ngStrap', 'ngAnimate', 'ngSanitize']);

planitup.controller("MainCtrl", function ($scope, createProjectOverlay) {
    $scope.chatAside = {
        "title": "Chat",
        "content": ' '
    };
    $scope.isCollapsed = true;

    $scope.toggleNewProject = function () {
        createProjectOverlay.toggleOverlay();
    }
});

planitup.controller("loginController", function ($scope, $window) {
    $scope.loginComplete = function () {
        $window.location.href = "index.html";
    };
});


planitup.factory('createProjectOverlay', function () {
    var container = document.querySelector('div.main-container'),
        overlay = document.querySelector('div.overlay'),
        navbar = document.querySelector('div.navbar'),
        chatButton = document.querySelector('div.chat-box');
    transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
    support = {
        transitions: Modernizr.csstransitions
    };

    return {
        toggleOverlay: function () {
            if (classie.has(overlay, 'open')) {
                classie.remove(overlay, 'open');
                classie.remove(container, 'overlay-open');
                classie.add(overlay, 'close');
                classie.remove(navbar, 'hide-element');
                classie.remove(chatButton, 'hide-element');
                var onEndTransitionFn = function (ev) {
                    if (support.transitions) {
                        if (ev.propertyName !== 'visibility') return;
                        this.removeEventListener(transEndEventName, onEndTransitionFn);
                    }
                    classie.remove(overlay, 'close');
                };
                if (support.transitions) {
                    overlay.addEventListener(transEndEventName, onEndTransitionFn);
                } else {
                    onEndTransitionFn();
                }
            } else if (!classie.has(overlay, 'close')) {
                classie.add(overlay, 'open');
                classie.add(container, 'overlay-open');
                classie.add(navbar, 'hide-element');
                classie.add(chatButton, 'hide-element');
            }
        }
    };
});