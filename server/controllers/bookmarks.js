'use strict';

var Bookmark = require('../models/bookmark');

exports.create = function(req, res){
  Bookmark.create(req.body, req.user, function(err, bookmark){
    if(bookmark){
      res.status(200).end();
    }else{
      res.status(418).end();
    }
  });
};

exports.all = function(req, res){
  Bookmark.all(req.user._id, function(err, bookmarks){
    if(bookmarks){
      res.send({bookmarks:bookmarks});
      //console.log(bookmarks);
      res.status(200).end();
    }else{
      res.status(418).end();
    }
  });
};

