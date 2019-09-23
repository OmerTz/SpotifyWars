var express = require('express');
var router = express.Router();
const title = "Omer Kingdom"
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("try run cmd")
  res.render('index', { title: title });
});

router.get('/next', function(req, res, next) {
  console.log("try run cmd")
  nextSong()
});

router.get('/prev', function(req, res, next) {
  console.log("try run cmd")
  prev()
  res.render('index', { title: title });
});

router.get('/setPlaylist', function(req, res, next) {
  console.log("try run cmd")
  setPlaylist()
  res.render('index', { title: title });
});

router.get('/pause', function(req, res, next) {
  console.log("try run cmd")
  pause()
  res.render('index', { title: title });
});

router.get('/play', function(req, res, next) {
  console.log("try run cmd")
  play()
  res.render('index', { title: title });
});

function nextSong() {
  run_cmd( "spotify", ["next"], function(text) { console.log (text) });
}

function prev() {
  run_cmd( "spotify", ["prev"], function(text) { console.log (text) });
}

function play() {
  run_cmd( "spotify", ["play"], function(text) { console.log (text) });
}

function pause() {
  run_cmd( "spotify", ["pause"], function(text) { console.log (text) });
}

function setPlaylist() {
  run_cmd( "spotify", ["play", "uri", "spotify:playlist:0z1cmnkQgE7HjWqDGqPkzf"], function(text) { console.log (text) });
}

function run_cmd(cmd, args, callBack ) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var resp = "";

  child.stdout.on('data', function (buffer) { resp += buffer.toString() });
  child.stdout.on('end', function() { callBack (resp) });
} // ()

module.exports = router;
