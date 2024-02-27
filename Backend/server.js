const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'classdle'
});

app.use(cors());

app.get('/klasszikus', (req, res) => {
  pool.query('SELECT * from navitems', function (error, results) {
    if (error) {
      res.status(500).send(error);
    }else{
      res.status(200).send(results);
    }
 
  });
});

app.get('/kep', (req, res)=>{
  pool.query('SELECT * from contents', function (error, results) {
    if (error) {
      res.status(500).send(error);
    }else{
      res.status(200).send(results);
    }
 
  });
    
})

app.get('/emoji', (req, res)=>{
  pool.query('SELECT * from contents', function (error, results) {
    if (error) {
      res.status(500).send(error);
    }else{
      res.status(200).send(results);
    }
 
  });
    
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});