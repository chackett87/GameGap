'use strict';

var app = angular.module('gameGap', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/posts', {
            templateUrl: '/static/gameGap/views/post.html',
            title: 'Posts',
        })
        .when('/', {
            templateUrl: '/static/gameGap/views/index.html',
            title: 'Home',
        })
        .when('/top_free', {
            templateUrl: '/static/gameGap/views/top_free.html',
            title: 'Top Free Games',
            controller: 'topFreeController',
            controllerAs: 'mc'
        })
        .when('/top_paid', {
            templateUrl: '/static/gameGap/views/top_paid.html',
            title: 'Top Paid Games',
            controller: 'topPaidController',
            controllerAs: 'mc'
        })
        .when('/top_grossing', {
            templateUrl: '/static/gameGap/views/top_grossing.html',
            title: 'Top Grossing Games',
            controller: 'topGrossingController',
            controllerAs: 'mc'
        })
        .when('/top_new_free', {
            templateUrl: '/static/gameGap/views/top_new_free.html',
            title: 'Top New Free Games',
            controller: 'topNewFreeController',
            controllerAs: 'mc'
        }) 
        .when('/top_new_paid', {
            templateUrl: '/static/gameGap/views/top_new_paid.html',
            title: 'Top New Paid Games',
            controller: 'topNewPaidController',
            controllerAs: 'mc'
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


