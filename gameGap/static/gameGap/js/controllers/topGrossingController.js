app.controller('topGrossingController', function($http) {
  var self = this;

  self.games = []; 
  var url = "https://42matters.com/api/1/apps/top_google_charts.json?callback=JSON_CALLBACK&list_name=topgrossing&cat_key=GAMES&country=US&limit=1&access_token=852c36f637f083e4e5a01abfc1a8ac384f694065";   
  var responsePromise = $http.jsonp(url);
  responsePromise.success(function(data) {
    self.games = data.appList;
    console.log(data.appList)
  }); 
});