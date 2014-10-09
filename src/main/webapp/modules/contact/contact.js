'use strict';

/**
 * Contact module for displaying home page content
 */

angular
  .module('springbootApp.contact',[
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when("/contact",
      {
        templateUrl: "/modules/contact/contact.html",
        controller: "ContactController"
      }
    );
  }]);