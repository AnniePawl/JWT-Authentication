const express = require('express');
const app = express();


// Routes 
app.get('/', (req, res) => {
  res.send('JWT is Badass')
});

// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Server Start
app.listen(3000, () => {
  console.log('JTW Authentication Almost in Action')
});