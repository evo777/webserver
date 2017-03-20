const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//If you are making the URI dynamic, the params has to match the url.

//Set Static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) => {
  let users = [
    {
      first_name: "John",
      last_name: "Doe",
      age: 34,
      gender: "male"
    },
    {
      first_name: "Tom",
      last_name: "Jackson",
      age: 24,
      gender: "male"
    },
    {
      first_name: "Eve",
      last_name: "Poe",
      age: 35,
      gender: "female"
    }
  ];

  res.json(users); //Serve up json files
});

//Download the pdf file
app.get('/downloads', (req, res) => {
  res.download(path.join(__dirname, '/downloads/pdf.pdf'));
});

app.get('/about', (req, res) => {
  res.redirect('/about.html');
});

app.post('/subscribe', (req, res) => {
  let name = req.body.name; //This is coming from index.html in the name attribute in the input field.
  let email = req.body.email; //This is coming from index.html in the name attribute in the input field.

  console.log(name+ ' has subscribed with ' + email);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});