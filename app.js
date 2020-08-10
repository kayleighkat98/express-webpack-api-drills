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
  const {a,b} = req.query;
  // const a = 2;
  // const b = 3;
  res.send(`the sum of ${req.a} and ${req.b} is blank`);

  // if(!a) {
  //   return res
  //       .status(400)
  //       .send('must be a');
  // }

});