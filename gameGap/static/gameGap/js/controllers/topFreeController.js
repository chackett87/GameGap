app.controller('topFreeController', function($http) {
  var self = this;

  self.games = []; 
  var url = "https://42matters.com/api/1/apps/top_google_charts.json?callback=JSON_CALLBACK&list_name=topselling_free&cat_key=GAMES&country=US&limit=1&access_token=7c2b7cd2d6913e3f2337770aa9f9efdee27913e3";   
  var responsePromise = $http.jsonp(url);
  responsePromise.success(function(data) {
    self.games = data.appList;
    console.log(data)
  }); 
});