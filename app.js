const express = require('express');
const morgan = require('morgan');


const app = express();
app.use(morgan('dev'));


app.get ('/',(req,res)=>{
  res.send('Hello Express!');
});

app.listen(8000,()=>{
  console.log('Express is running on port 8000!');
});

app.get('/sum', (req, res)=>{
  const responseText = `the sum of ${parseInt(req.query.a)} and ${parseInt(req.query.b)} is ${parseInt(req.query.a)+parseInt(req.query.b)}`;
  //const {a,b} = req.query;
  // const a = 2;
  // const b = 3;
  console.log(req.query);
  res.send(responseText);

  // if(!a) {
  //   return res
  //       .status(400)
  //       .send('must be a');
  // }
 
});
app.get('/queryViewer', (req, res) =>{
  console.log(req.query);
  res.end();
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//DRILL 2   

app.get('/cipher',(req,res)=>{
    
})