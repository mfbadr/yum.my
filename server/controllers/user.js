'use strict';

var User = require('../models/user');

exports.login = function(req, res){
  User.login(req.body, function(err, user){
    if(user){
      req.session.regenerate(function(){ //so cookies are not re usable
        req.session.userId = user._id; //attack uId to session
        req.session.save(function(){
          res.setHeader('X-Authenticated-User', user.email);
          res.status(200).end();
        });
      });
    }else{
      res.status(401).end();
    }
  });
};

exports.register = function(req, res){
  User.register(req.body, function(err, user){
    if(user){
      res.status(200).end();
    }else{
      res.status(400).end();
    }
  });
};

exports.logout = function(req, res){
  req.session.destroy(function(){
    res.setHeader('X-Authenticated-User', 'anonymous');
    res.status(200).end();
  });
};
