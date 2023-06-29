var express = require('express');
var router = express.Router();

var monk = require('monk');
const fs = require("fs");

var app = express();


 var db=monk("mongodb+srv://20a91a0522:realtest@realtest.5sbxtaa.mongodb.net/test")

 
//var db = monk('127.0.0.1:27017/realtesting')
//mongodb+srv://20a91a0522:Realestate@realestate.aeehp5x.mongodb.net/?retryWrites=true&w=majority
// var db = monk('127.0.0.1:27017/RealEstate')
//mongosh "mongodb+srv://userdataclust.qu9r7bd.mongodb.net/myFirstDatabase" --apiVersion 1 --username 20a91a0522
//mongodb+srv://20a91a0522:<password>@realestate.aeehp5x.mongodb.net/test
var collections = db.get('collections')
var housedetails=db.get('housedetails')
var contactdetails=db.get('contactdetails')




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', async(req,res)=>{
const docs=await collections.find();
// console.log(docs)
res.json(docs);
});

router.get('/gethouses',async(req,res)=>{
  const house=await housedetails.find({});
  console.log(house)
  res.json(house)
})


router.post('/postcontact',function(req,res){
  console.log(req.body)
  let cont={
    "name":req.body.contactt.name,"mail":req.body.contactt.mail,"subject":req.body.contactt.subject,
    "number":req.body.contactt.number,"query":req.body.contactt.query
  }
  contactdetails.insert(cont,function(err,result){
      if(err){
        res.send(err)
      }
      else{
        res.send(result)
      }
  })
})

router.post('/postuser',function(req,res){
  console.log(req.body)
  // res.send("success")
  let data = {
    "name":req.body.users.name,"username":req.body.users.username,"pwd1":req.body.users.ps1,"pwd2":req.body.users.ps2
  }
  
  collections.insert(data,function(err, result) {
    if (err) {
      res.send(err)
    }
    else{
      // console.log(result)
      res.send(result)
    }
  })

})
router.post('/postsell',function(req,res){
  console.log(req.body)
  // res.send("success")
  let data = {
    "name":req.body.selldetails.name,"mail":req.body.selldetails.mail,"price":req.body.selldetails.price,
    "rating":req.body.selldetails.rating,"area":req.body.selldetails.area,
    "age":req.body.selldetails.age,"address":req.body.selldetails.address,"type":req.body.selldetails.type,"filee":req.body.selldetails.filee,
    "rooms":req.body.selldetails.rooms
  }
  housedetails.insert(data,function(err, result) {
    if (err) {
      res.send(err)
    }
    else{
      // console.log(result)
      res.send(result)
    }
  })
  
})

module.exports = router;

//https://api.thedogapi.com/v1/breeds
//fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
//<img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} alt="img"/>