var Q = require('q');
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  
  usernmae : String,
  text : String,
  imgUrl : String,
  youtubeUrl : String,
  createdAt : Date,
  updatedAt : Date,
  like : {
    type : Number,
    default : 0
  },
  map : String

},
{ 
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} 
});


module.exports = mongoose.model('posts', PostSchema);
