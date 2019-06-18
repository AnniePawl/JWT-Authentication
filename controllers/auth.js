// Signup Route
app.get('/sign-up', (req, res) => {
  res.send('JWT is Badass')
});

// Post Route 
app.post('/posts/new', (req, res) => {
  // instantiate user model
  const user = new User(req.body);

  // Save instance of model to DB
  post.save((err, post) => {
    // Redirect to root
    return res.redirect(`/`);
  })
});