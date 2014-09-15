'use strict';

//var bcrypt = require('bcrypt'),
var Mongo  = require('mongodb');

function Category(){
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

//User.findById = function(id, cb){
  //var _id = Mongo.ObjectID(id);
  //User.collection.findOne({_id:_id}, cb);
//};

Category.create = function(o,user, cb){
  o.userId = user._id;
  Category.collection.save(o, cb);
};

Category.all = function(id, cb){
  var _id = Mongo.ObjectID(id);
  console.log(_id);

  Category.collection.find({userId:_id}).toArray(cb);
};

//User.login = function(o, cb){
  //User.collection.findOne({email:o.email}, function(err, user){
    //if(!user){return cb();}
    //var isOk = bcrypt.compareSync(o.password, user.password);
    //if(!isOk){return cb();}
    //cb(null, user);
  //});
//};

module.exports = Category;

