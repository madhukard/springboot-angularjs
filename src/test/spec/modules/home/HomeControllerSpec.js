'use strict';

describe('Controller: modules/home/HomeCtrl', function() {
  var $rootScope, $scope, $controller;

  beforeEach(module('springbootApp'));

  beforeEach(inject(function(_$rootScope_, _$controller_){
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;

    $controller('HomeController', {'$rootScope' : $rootScope, '$scope': $scope});

  }));

  it('should make home menu item active.', function() {
    expect($rootScope.common.active.home == 'active');
  });

  it('should set header', function() {
    expect($scope.header).toBeDefined();
  });

  it('should set message', function() {
    expect($scope.message).toBeDefined();
  });

});