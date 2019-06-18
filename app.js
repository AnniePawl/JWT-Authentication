const express = require('express');
const app = express();


// Routes 
app.get('/', (req, res) => {
  res.send('JWT is Badass')
});

// Server Start
app.listen(3000, () => {
  console.log('JTW Authentication Almost in Action')
});