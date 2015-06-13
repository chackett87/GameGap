app.controller('mainController', function($http, $scope) {
    // Controller logic goes here
    console.log('Our controller is working');
    $http.get('/api/blog/entries')
        .then(function(data) {
            console.log(data);
        });
});