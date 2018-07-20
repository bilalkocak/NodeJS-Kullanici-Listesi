var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var mongoose = require('mongoose');

var User = mongoose.model("User");

/* GET users listing. */
router.get('/', function (req, res, next) {

  User.find(function (errors, users) {
    res.render('list', {
      userList: users
    });
  })

});

router.get('/create', function (req, res, next) {
  res.render('create');
});

router.post("/create", function (req, res, next) {

  new User({
    adSoyad: req.body.adSoyad,
    cinsiyet: req.body.cinsiyet,
    sirket: req.body.sirket,
    yas: req.body.yas,
    memleket: req.body.memleket,
    okul: req.body.okul

  }).save(function (error, comment) {
    res.redirect("/users");
  })

});

router.get('/delete/:id', function (req, res, next) {
  User.findByIdAndRemove(req.params.id, function (error, next) {
    res.redirect("/users");
  })
});


router.post('/update/:id', function (req, res, next) {
  var id = req.params.id;
  console.log("Gelen id: " + id);
  User.findByIdAndUpdate(id, {
    adSoyad: req.body.adSoyad,
    cinsiyet: req.body.cinsiyet,
    sirket: req.body.sirket,
    yas: req.body.yas,
    memleket: req.body.memleket,
    okul: req.body.okul
  }, function (error, next) {
    console.log(id);
    res.redirect("/users");
  })
});

router.get("/update/:id", function (req, res, next) {
  User.findOne({
    _id: req.params.id
  }, function (errors, users) {
    res.render('update', {
      userList: users
    });
  });
});

router.get("/Kadin", function (req, res, next) {
  User.find({
    cinsiyet: "Kadın",
  }, function (err, users) {
    res.render('list', {
      userList: users
    });
  });
});

router.get("/Erkek", function (req, res, next) {
  User.find({
    cinsiyet: "Erkek",
  }, function (err, users) {
    res.render('list', {
      userList: users
    });
    
    User.count({ cinsiyet: 'Erkek' }, function (err, count) {
      if (err) console.log("hata");
      console.log('there are %d jungle adventures', count);
    });

  });
});



module.exports = router;