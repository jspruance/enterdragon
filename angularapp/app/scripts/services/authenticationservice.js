angular.module('app').factory('AuthenticationService', function() {
    var savedusername = 'enter';
    var savedpassword = 'dragon';
    var isAuthenticated = false;

    return {
      login : function(username, password) {
        isAuthenticated = username === savedusername && password === savedpassword;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };

  });
