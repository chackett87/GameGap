'use strict';


app.controller('postController', function(posts) {
  var self = this;

  posts.then(function (posts) {
    self.posts = posts;
  });
})
.factory('posts', function ($http, $q) {
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
});
