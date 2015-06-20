var app = angular.module('gameGap', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/gameGap/views/index.html',
            title: 'Home',
        })
        .when('/top_free', {
            templateUrl: '/static/gameGap/views/top_free.html',
            title: 'Top Free Games'
        })
        .when('/top_paid', {
            templateUrl: '/static/gameGap/views/top_paid.html',
            title: 'Top Paid Games'
        })
        .when('/top_grossing', {
            templateUrl: '/static/gameGap/views/top_grossing.html',
            title: 'Top Grossing Games'
        })
        .when('/top_new_free', {
            templateUrl: '/static/gameGap/views/top_new_free.html',
            title: 'Top New Free Games',
            controller:
            controllerAs:
        }) 
        .when('/top_new_paid', {
            templateUrl: '/static/gameGap/views/top_new_paid.html',
            title: 'Top New Paid Games'
            // pageFunction: ''

        })
        .when('/NOTHINGHERE', {
            templateUrl: '/static/gameGap/views/nothing.html',
            title: 'Error'
        })
        .otherwise({
            redirectTo: '/NOTHINGHERE'
        })
}]);

app.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
    if(current.$$route){
      document.getElementById('title').innerHTML = current.$$route.title;
    }
    if(current.$$route.pageFunction){
        console.log(current.$$route.pageFunction);
    }
  })
}])


