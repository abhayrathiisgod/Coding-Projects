// module to handle GET request and load the registration form
exports.getForm = (req, res) => {
    res.sendFile('public/form.html', { root: '.' });
  };
  
  // module to handle POST request when the user submits the registration form
  // form data is captured and sent back as a response
  exports.postForm = (req, res) => {
    console.log(req.body);
    res.send(`
      <h1>Registration Successful :-)</h1>
      <p>Name: ${req.body.name}</p>
      <p>Username: ${req.body.username}</p>
      <p>Email: ${req.body.mail}</p>
      <p>Contact: ${req.body.mobile}</p>
    `);
  };