import { userInfo } from "os";

// Require json web token
const jwt = require('jsonwebtoken');
const token = jwt.sign({ _id: user._id }, 'shhhhhhared-secret');


// Signup Route
app.get('/sign-up', (req, res) => {
  res.send('JWT is Badass')
});

// Post Route 
app.post('/posts/new', (req, res) => {
  // instantiate user model
  const newUser = new User(req.body);
  newUser.save(function (err) {
    if (err) console.log(err);
    // saved!
  });

  // Save instance of model to DB
  // post.save((err, post) => {
  //   // Redirect to root
  //   return res.redirect(`/`);
  // })
});