'use strict';

/**
 * About module for displaying about page content
 */

angular
  .module('springbootApp.about',[
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when("/about",
      {
        templateUrl: "/modules/about/About.html",
        controller: "AboutController"
      }
    );
  }]);