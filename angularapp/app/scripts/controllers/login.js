'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 */

function loginFormCtrl($scope, $element, $attrs, $stateParams, $state, AuthenticationService) {

   // submit form
   $scope.submitForm = function() {

     if(AuthenticationService.login($scope.username, $scope.password)) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('authsuccess');
      } else {
        $scope.error = "You have entered an incorrect username / password combination";
      }

   };

 }

angular.module('app').component('login', {

  templateUrl: 'app/components/login.html',

  controller: loginFormCtrl

});
