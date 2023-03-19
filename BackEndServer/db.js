const mongoose = require('mongoose');

const connectToMongo =async ()=> {
    await mongoose.connect('mongodb://127.0.0.1:27017/formdb');
    console.log('db connected');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  connectToMongo().catch(err => console.log(err));

  module.exports = connectToMongo;

