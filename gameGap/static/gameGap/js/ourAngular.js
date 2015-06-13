var app = angular.module('gameGap', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/gameGap/views/index.html',
            controller: 'mainController',
            title: 'Home'
        })
        .when('/top_games', {
            templateUrl: '/static/gameGap/views/top_games.html',
            controller: 'mainController',
            title: 'Top Games'
        })
        .when('/new_games', {
            templateUrl: '/static/gameGap/views/new_games.html',
            controller: 'mainController',
            title: 'New Games'
        })
        .when('/genres', {
            templateUrl: '/static/gameGap/views/genres.html',
            controller: 'mainController',
            title: 'Genres'
        })
        .when('/NOTHINGHERE', {
            templateUrl: '/static/gameGap/views/nothing.html',
            controller: 'mainController',
            title: 'Error'
        })
        .otherwise({
            redirectTo: '/NOTHINGHERE'
        })
}]);

app.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
    if(current.$$route){
      $rootScope.title = current.$$route.title;
      console.log(current);
    }
  })
}])


