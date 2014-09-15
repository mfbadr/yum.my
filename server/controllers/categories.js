'use strict';

var Category = require('../models/category');

exports.create = function(req, res){
  Category.create(req.body, req.user, function(err, category){
    if(category){
      res.status(200).end();
    }else{
      res.status(418).end();
    }
  });
};

exports.all = function(req, res){
  Category.all(req.user._id, function(err, categories){
    if(categories){
      res.send({categories:categories});
      console.log(categories);
      res.status(200).end();
    }else{
      res.status(418).end();
    }
  });
};

