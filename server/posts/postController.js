var Q = require('q');
var Post = require('./postModel.js');

var findPosts = Q.nbind(Post.find, Post);
var createPost = Q.nbind(Post.create, Post);
var createPosts = Q.nbind(Post.insertMany, Post);
var removePost = Q.nbind(Post.remove, Post);

module.exports = {
  
  allPosts: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    findPosts()
      .then(function (posts) {
        if (!posts) {
          next(new Error('Post does not exist'));
        } else {
          res.json(posts);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  newPost: function (req, res, next) {
   
  },

  initPostsData : function(req, res, next){

    removePost({})
      .then(function(data){
        console.log("data.result.ok ::: ", data.result.ok);
        console.log("data.result ::: ", data.result);
        if(data.result.ok === 1){
          console.log("creating!!!")
          createPost(initArr[0])
            .then(function(post){
              console.log("created111");
              createPost(initArr[1])
                .then(function(post){
                  console.log("CREATED2222");
                })
            }) 
        }
      })
      .catch(function(err){
        console.log("Remove ::: ERR", err);
      })


    var initArr = [
      {
        id: 1,
        username : 'khseok',
        createdAt: '2017.11.31',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex mauris, imperdiet ut imperdiet sit amet, accumsan a augue.',
        like: 120,
        comments: [
          {
            username: '1111',
            comment: 'Everything is awesome! Everything is cool when you are part of team.'
          },
          {
            username: '2222',
            comment: 'Quisque cursus odio ut diam dignissim.'
          }
        ]
      },
      {
        id: 2,
        username : 'Doveloper',
        createdAt: '2017.10.21',
        text: 'In consequat vehicula est at maximus. Quisque cursus odio ut diam dignissim, sed dictum lacus dignissim.',
        youtubeUrl: 'https://youtu.be/dQw4w9WgXcQ',
        like: 9 
      }
    ];
    
  }

};
