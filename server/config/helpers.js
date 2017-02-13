var jwt = require('jwt-simple');

module.exports = {
  errorLogger: function (error, req, res, next) {
    // error를 log하고 그다음 error handling middleware로 넘깁니다.
    console.error(error.stack);
    next(error);
  },
  errorHandler: function (error, req, res, next) {
    // error message를 client에 보내줍니다.
    // client에서는 error message를 보고 error handling을 하도록 합니다.
    res.status(500).send({error: error.message});
  },

  decode: function (req, res, next) {
    var token = req.headers['x-access-token'];
    var user;

    if (!token) {
      return res.send(403); // token이 없으면 forbidden보내기.
    }

    try {
      // token을 decode하고 request에 user를 붙여 줍니다.
      // 이 user는 controller에서 사용됩니다.
      user = jwt.decode(token, 'secret');
      req.user = user;
      next();
    } catch (error) {
      return next(error);
    }

  }
  
};
