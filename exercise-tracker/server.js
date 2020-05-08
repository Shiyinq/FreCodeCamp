const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect(process.env.MLAB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})


let logSchema = new Schema({
  description: {type: String, required: true},
  duration: {type: Number, required: true},
  date: {type: String, required: true}  
})

let excerciseSchema = new Schema({ 
  username: { type: String, required: true, unique: true, unique: true, index: true}, 
  count: {type: Number, required: true},
  log: [
    logSchema
  ]
})

let Exercise = mongoose.model("Exercise", excerciseSchema);


app.get('/ping', function(req, res) {
  res.json({
    message: "Pong 🏓🏓"
  })
})


app.post('/api/exercise/new-user', function(req, res) {
  let { username } = req.body;

  let user = new Exercise({
    username: username, 
    count: 0,
  });
  
  user.save(function(err, data) {
    if(err){
      let error = err.errors
      let mError = '';
      for(let e in error) {
         mError += error[e].message + '\n' 
      }
      res.send(mError)
      
    }else {
      
      res.json({
        username: data.username,
        _id : data._id
      })
      
    }
  })
  
})

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

app.post('/api/exercise/add', function(req, res) {
  
  let {userId, description, duration, date} = req.body;
  let newDate = new Date(date).toUTCString().split(' ').slice(0, 4).join(' ').replace(',', '').split(' ');
  let currenDate = new Date().toUTCString().split(' ').slice(0, 4).join(' ').replace(',', '').split(' ');
   
  Exercise.findById(userId, function(err, data) {
    if(err) return console.log(err)
  
    let objLog = {
      username: data.username,
      description: description,
      duration: Number(duration),
      "_id": userId,
      date: date ? `${newDate[0]} ${newDate[2]} ${newDate[1]} ${newDate[3]}` : `${currenDate[0]} ${currenDate[2]} ${currenDate[1]} ${currenDate[3]}`,
    }
  
    data.count += 1;
    data.log.push(objLog);

    data.save(function(err, data){
      if(err){
        let error = err.errors
        let mError = '';
        for(let e in error) {
           mError += error[e].message + '\n' 
        }
        res.send(mError)
      }else {
        res.send(objLog)
      }
    })
    
  })

  
})


function validDate(date) {
  let regexDate = /[0-9]{4}\-[0-9]{2}\-[0-9]{2}/g
  return regexDate.test(date);
}

app.get('/api/exercise/log', function(req, res) {
  let query = req.query;
  
  if(query.userId){
    
    Exercise.findById(query.userId, function(err, data) {
      if(err) return console.log(err);
      
      let userLog = {
        "_id": '',
        "username": '',
        "count": 0,
        log: []
      }
      
      data.log.forEach(v => {
        userLog.log.push({
          "description": v.description,
          "duration": v.duration,
          "date": formatDate(v.date)
        })  
      })
      
      if(query.limit) {
        userLog.log = userLog.log.slice(0, query.limit);
      }
      
      if(query.from && query.to && validDate(query.from) && validDate(query.to) ) {
        let fromTo = []
        
        userLog.log.forEach(v => {
          if(new Date(v.date) >= new Date(query.from) && new Date(v.date) <= new Date(query.to)) {
            let d = new Date(v.date).toUTCString().split(' ').slice(0, 4).join(' ').replace(',', '').split(' ')
            fromTo.push({
              "description": v.description,
              "duration": v.duration,
              "date": `${d [0]} ${d [2]} ${d [1]} ${d [3]}`
            })            
          }

        })
        
        userLog.log = fromTo
      }
      
      if(query.from && validDate(query.from)) {
        let fromTo = []
        
        userLog.log.forEach(v => {
          if(new Date(v.date) >= new Date(query.from)) {
            let d = new Date(v.date).toUTCString().split(' ').slice(0, 4).join(' ').replace(',', '').split(' ')
            fromTo.push({
              "description": v.description,
              "duration": v.duration,
              "date": `${d [0]} ${d [2]} ${d [1]} ${d [3]}`
            })        
          }

        })
        
        userLog.log = fromTo
      }
      
      res.json(userLog);
      
    })
    
    
  }else {
    res.send('unknown userId')
  }
  
})


app.get('/api/exercise/users', function(req, res) {
   Exercise.find({}, '-log -count', function(err, users) {
    var userMap = [];

    users.forEach(function(user) {
      userMap.push(user);
    });

    res.send(userMap);  
  })

})


// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
})

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
