'use strict';

app.controller('topFreeController', function($http) {
  var self = this;

  var urlGet = "https://42matters.com/api/1/apps/top_google_charts.json?callback=JSON_CALLBACK&list_name=topselling_free&cat_key=GAMES&country=US&limit=6&access_token=7c2b7cd2d6913e3f2337770aa9f9efdee27913e3";   
  var responsePromise = $http.jsonp(urlGet);
  var urlPost = "http://127.0.0.1:8000/posts/entries/";
  var urlComment = "http://127.0.0.1:8000/comment/comments/";

  self.formEntry = false;

  self.showModal = function(){
      self.formEntry = true;
  };
  self.hideModal = function(){
      self.formEntry = false;
  }
  
  self.addTitle = function() {
    // var postTitle = {'title':self.addPost};
    var postTitle = {'title':'yayaya'};
    $http.post(urlPost, postTitle)
    .then(function(response){
      console.log(response);
    });
  };

  self.addInformation = function() {
    // var commentInformation = {'body':self.addComment};
    var commentInformation = {'body':'jasdfjsdfsadlfj'};
    $http.post(urlComment, commentInformation)
    .then(function(response){
      console.log(response);
    });
  };

  self.addInformation();

  self.games = []; 
  responsePromise.success(function(data) {
    self.games = data.appList;
    console.log(data)
  }); 
});

