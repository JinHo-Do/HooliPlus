//var linksController = require('../links/linkController.js');
var userController = require('../users/userController.js');
var postController = require('../posts/postController.js');
var helpers = require('./helpers.js'); // our custom middleware


module.exports = function (app, express) {

  //app.get('/:code', linksController.navToLink);
  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);


  // authentication middleware로 request에서 받은 token을 decode하는데 사용됩니다.
  //app.use('/api/links', helpers.decode);
  
  //app.get('/api/links/', linksController.allLinks);
  //app.post('/api/links/', linksController.newLink);

  app.get('/api/posts', postController.allPosts);
  app.post('/api/posts', helpers.decode, postController.newPost);


  //test 용 코드
  app.use(postController.initPostsData);
  
  // 만약 request가 위의 route외 다른 route로 요청을 보낸다면, custom error handler
  //로 보내 줍니다.
  

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

};

