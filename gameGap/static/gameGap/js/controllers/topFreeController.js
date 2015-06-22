app.controller('topFreeController', function($http) {
  var self = this;

  self.z = 'Stuff'; 

  self.games = []; 
  var url = "https://42matters.com/api/1/apps/top_google_charts.json?callback=JSON_CALLBACK&list_name=topselling_free&cat_key=GAMES&country=US&limit=6&access_token=852c36f637f083e4e5a01abfc1a8ac384f694065";   
  var responsePromise = $http.jsonp(url);
  responsePromise.success(function(data) {
    self.games = data.appList;
    console.log(data)
  }); 

  // self.topFreeGames = function(){
  //   self.testArray = [1,2,3,4,5,6];
  //   console.log('in topFreeGames');
  // };
  // self.topPaidGames = function(){
  //   self.testArray = [11,44,55,77];
  // }

});