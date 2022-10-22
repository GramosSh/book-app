const express = require ('express');
const app= express();
const cors = require ('cors');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/books');
// const booksRoute= require('./routes/books');
const mongoose = require ('mongoose');



app.use(cors());
app.use(express.json());
app.use('/books', booksRoute);


// app.use('/books', booksRoute);

// mongoose.connect('mongodb+srv://book:books@cluster0.zrim27f.mongodb.net/?retryWrites=true&w=majority', (event) => {
//   console.log("Connected to DB Succesfully");
// }).catch(e => console.log(e));

mongoose
  .connect(
    "mongodb+srv://book:book@cluster0.zrim27f.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));





