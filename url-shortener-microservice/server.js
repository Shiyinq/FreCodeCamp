'use strict';

const dns = require('dns');
const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");
const uniqid = require('uniqid');

const cors = require('cors');

const parser = bodyParser.urlencoded({ extended: true });

const app = express();

// Basic Configuration 
const port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.DB_URI);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }); 
mongoose.set('useFindAndModify', true);

app.use(cors());
app.use(parser);

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});


let urlSchema = new Schema({ 
  original_url: { type: String, required: true }, 
  short_url: {type: String, required: true},
});

let Url = mongoose.model("Urls", urlSchema);


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


let shorturl = function(url, id, done) {

  let shorten = new Url({
    original_url: url,
    short_url: id
  });

  shorten.save(function(err, data) {
    if(err) return console.error(err);
    done(null, data)
  });

};


let isURLValid = function(url) {
  let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
  
  return regex.test(url);
}

app.get("/api/shorturl/:id", function(req, res) {
    
    let {id} = req.params;
  
    Url.findOne({short_url : id}, 'original_url short_url -_id', function(err, url) {
     if(err) { return console.log(err); }
      
      if(!url) {
        res.json({
          error: "No short url found for given input"
        });
      }else {
        res.redirect(url.original_url);
      }
   
    });
  
});

app.post("/api/shorturl/new", function (req, res, next) {
  
  let { url } = req.body;
  let id = uniqid.time();
  
  let isValid = isURLValid(url);
  
   
  dns.lookup(url.split('//')[1], function (err, addresses, family) {
    
    if(!isValid) {
      res.json({
        error : "invalid URL"
      });
    }else if(err) {
      res.json(err);
    }else {
      var t = setTimeout(() => { next({message: 'timeout'}) }, 10000);
  
      shorturl(url, id, function(err, data) {
        clearTimeout(t);

        if(err) { return (next(err)); }

        if(!data) {
          return next({message : 'No Data'});
        }

        Url.findById(data._id, 'original_url short_url -_id', function(err, url) {
           if(err) { return (next(err)); }
           res.json(url);
         });

      });

    }
    
  });
  
});


app.listen(port, function () {
  console.log('Node.js listening ...');
});