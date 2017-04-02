'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 */

function contactFormCtrl($scope, $element, $attrs) {

   // submit form
   $scope.submitForm = function(isValid) {

     // validate form
     if (isValid) {
       alert('Form submitted');
     }

   };

 }

angular.module('app').component('contact', {

  templateUrl: 'app/components/contact.html',

  controller: contactFormCtrl

});
