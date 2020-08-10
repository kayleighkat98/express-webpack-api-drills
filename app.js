const express = require('express');

const app = express();


app.get ('/',(req,res)=>{
  res.send('Hello Express!');
});

app.listen(8000,()=>{
  console.log('Express is running on port 8000!');
});

app.get('/sum', (req, res)=>{
  const a = 2;
  const b = 3;
  res.send('the sum of ' + ${'a'} + 'and'+ ${'b'}+'is blank');
});