'use strict';

/**
 * Home controller
 */

angular.module('springbootApp.home')
  .controller('HomeController', function($scope){
    $scope.header = 'Spring Boot/AngularJs/Bootstrap starter template';
    $scope.message = 'Use this document as a way to quickly start any new project.';
  });