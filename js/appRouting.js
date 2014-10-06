planitup.run(function ($rootScope, $window) {
//    $('.navmenu').offcanvas({
//        'toggle': false
//    });

    // publish current transition direction on rootScope
    $rootScope.direction = 'ltr';
    // listen change start events
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
//        $('.navmenu').offcanvas('hide');
        //        sets variable to change direction of animation depending on depth
        $rootScope.direction = 'rtl';
        if (current && next && (current.depth > next.depth)) {
            $rootScope.direction = 'ltr';
            console.log('ltr');
        }
        else{
                        console.log('rtl');
        }
        // back
        $rootScope.back = function () {
            $window.history.back();
        }
    });

});

// ROUTING ===============================================
// set our routing for this application
// 
planitup.config(function ($routeProvider) {

    $routeProvider

    // carts page
    .when('/tasks/project', {
        templateUrl: 'all_project_tasks.html',
        depth: 3
    })
    
    // carts page
    .when('/tasks/user', {
        templateUrl: 'all_user_tasks.html',
        depth: 3
    }) 
    
    // carts page
    .when('/discussions', {
        templateUrl: 'all_project_discussions.html',
        depth: 3
    })
    
    // carts page
    .when('/discussion', {
        templateUrl: 'discussion1.html',
        depth: 3
    })
    
    // carts page
    .when('/updates/project', {
        templateUrl: 'all_project_updates.html',
        depth: 3
    })
    
    // carts page
    .when('/updates/user', {
        templateUrl: 'all_user_updates.html',
        depth: 3
    })
    
    // carts page
    .when('/project', {
        templateUrl: 'project_example.html',
        depth: 2
    })

    // Home Page
    .when('/', {
        templateUrl: 'dashboard.html',
        depth: 1
    });

});
