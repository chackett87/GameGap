'use strict';

app.controller('topNewPaidController', function($http) {
  var self = this;

  self.games = []; 
  var url = "https://42matters.com/api/1/apps/top_google_charts.json?callback=JSON_CALLBACK&list_name=topselling_new_paid&cat_key=GAMES&country=US&limit=6&access_token=ca533a7a14658fbd32ecd9fb9718f3f96e7c43ad";   
  var responsePromise = $http.jsonp(url);
  var urlTitle = "http://127.0.0.1:8000/posts/entries/";
  var urlComment = "http://127.0.0.1:8000/comment/comments/";

  self.formEntry = false;

  self.showModal = function(elem){
      self.formEntry = true;
      // console.log(elem)
      self.gameName = elem.title;
      self.addTopic = self.gameName;
  };
  self.hideModal = function(){
      self.formEntry = false;
  }
  self.addNewDiscussion = function() {
    var topic = {'title':self.addTopic};
    
    $http.post(urlTitle, topic)
    .then(function(response){
      var comment = {'body':self.addPost, 'post':response.data.id};
      $http.post(urlComment, comment)
      .then(function(response){console.log(response);}, function(response){console.log(response);});
    });
    self.hideModal();
  };

  self.games = []; 
  responsePromise.success(function(data) {
    self.games = data.appList;
    console.log(data)
  }); 
});
