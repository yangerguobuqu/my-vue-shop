var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

//连接数据库

mongoose.connect('mongodb://127.0.0.1:27017/vue_shop');
mongoose.connection.on("connected",function(){
  console.log("mongodb connected successfully !")
});
mongoose.connection.on("error",function(){
  console.log("mongodb connected fail !")
});
mongoose.connection.on("disconnected",function(){
  console.log("mongodb connected disconnected !")
})
/* 查询商品列表数据 */
router.get('/', function(req, res, next) {
  res.send('欢迎来到 users 页面');
});

module.exports = router;
