'use strict';

angular.module('springbootApp', [
  'ngRoute',
  'springbootApp.home',
  'springbootApp.about',
  'springbootApp.contact'
])
  .config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({
      redirect: '/'
    });
  })
  .run(function ($location, $rootScope) {
    var defaultTitle = 'AngularJS App';
    $rootScope.common = $rootScope.common || {
      title : 'AngularJS App',
      active: {}
    };

    // set actions to be taken each time the user navigates
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      // set page title
      if(current.$$route) {
        $rootScope.common.title = current.$$route.title || defaultTitle;

        // set active menu class for the left navigation (.sidenav)
        var currentCtrl = current.controller.substring(0, current.controller.indexOf('Controller')).toLowerCase();
        $rootScope.common.active[currentCtrl] = 'active';
        if (previous && previous.controller) {
          var previousCtrl = previous.controller.substring(0, previous.controller.indexOf('Controller')).toLowerCase();
          delete $rootScope.common.active[previousCtrl];
        }
      }
    });
  });