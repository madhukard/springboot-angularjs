'use strict';

/**
 * Home module for displaying home page content
 */

angular
  .module('springbootApp.home',[
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when("/",
      {
        templateUrl: "/modules/home/home.html",
        controller: "HomeController"
      }
    );
  }]);