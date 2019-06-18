const express = require('express');
const app = express();
const port = 3000;


// Routes 
app.get('/', (req, res) => {
  res.render(index)
});

// Require Controllers
require('./controllers/auth.js')(app);

// Require Models 
require('./models/user')(app);



// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Server Start
app.listen(3000, () => {
  console.log('JTW Authentication Almost in Action')
});