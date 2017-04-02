'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:HomeCtrl
 * @description
 * # AboutCtrl
 */

angular.module('app').component('home', {

  bindings: { isAuthenticated: '<' },
  templateUrl: 'app/components/home.html',
  controller: function($scope) {
    $scope.isAuthenticated = false;
  }

});
