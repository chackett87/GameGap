'use strict';


app.controller('postController', function($http, posts) {
  var self = this;

  posts().then(function (posts) {
    self.posts = posts.reverse();
  });
  var urlTitle = "http://127.0.0.1:8000/posts/entries/";
  var urlComment = "http://127.0.0.1:8000/comment/comments/";

  self.formEntry = false;

  self.showModal = function(elem){
      self.formEntry = true;
      self.addTopic = self.gameName;
  };
  self.hideModal = function(){
      self.formEntry = false;
  };
  self.addNewDiscussion = function() {
    var topic = {'title':self.addTopic};
    
    $http.post(urlTitle, topic)
    .then(function(response){
      var comment = {
        body: self.addPost,
        post: response.data.id
      };

      $http.post(urlComment, comment)
      .then(function(response){
        console.log(response);
        return posts().then(function (posts) {
          self.posts = posts;
        });
      }).catch(function(err){
        console.log(err);
      });
    });
    self.hideModal();
  };
})

.factory('posts', function ($http, $q) {
  return function () {
    var pPosts = $http.get('http://127.0.0.1:8000/posts/entries/');
    var pComments = $http.get('http://127.0.0.1:8000/comment/comments');

    return $q.all({
      posts: pPosts,
      comments: pComments
    })
    .then(function (datums) {
      return datums.posts.data.map(function (post) {
        post.comments = datums.comments.data.filter(function (comment) {
          return comment.post === post.id;
        });
        return post;
      });
    });
  };
});
