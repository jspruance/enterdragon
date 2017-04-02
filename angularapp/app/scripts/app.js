'use strict';

/**
 * @ngdoc overview
 * @name angularappApp
 * @description
 * # angularappApp
 *
 * Main module of the application.
 */
angular.module('app', ['ui.router', 'ngResource'])
  .config(function ($stateProvider) {

    var homeState = {
      name: 'home',
      url: '/home',
      component: 'home',
    }

    var loginState = {
      name: 'login',
      url: '/login',
      component: 'login'
    }

    var authSuccessState = {
      name: 'authsuccess',
      url: '/authsuccess',
      component: 'authsuccess'
    }

    var aboutState = {
      name: 'about',
      url: '/about',
      component: 'about'
    }

    var contactState = {
      name: 'contact',
      url: '/contact',
      component: 'contact'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(loginState);
    $stateProvider.state(aboutState);
    $stateProvider.state(contactState);
    $stateProvider.state(authSuccessState);
  });

  angular.module('app').run(function($rootScope, $location, $state, AuthenticationService) {
    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
          console.log('Changed state to: ' + toState);
      });

      if(!AuthenticationService.isAuthenticated()) {
        $state.transitionTo('login');
      }
  });
