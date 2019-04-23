angular.module('fifaApp', []).factory('FifaService', ['$http', function ($http) {

    return {
        getTeams: function () {
            return $http.get('/api/team/');
        },
        getTeamDetails: function (code) {
            return $http.get('/api/team/' + code);
        }
    }
}]).factory('UserService', ['$http', function ($http) {
    var service = {
        isLoggerin = false,
        session = function () {
            return $http.get('/api/session').then(function (responses) {
                service.isLoggedIn = true;
                return response;
            });
        },
        login = function (user) {
            return $http.get('/api/login', user).then(function (response) {
                service.isLoggedIn = true;
                return response;
            });
        }
    };
    return service;
}]);