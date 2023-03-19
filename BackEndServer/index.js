const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const connectToMongo =require('./db')  // database mongodb 

//// schema ./schema/userschema
const Users = require('./Schema/UserSchema')

// database connect 
connectToMongo();

const port = 8080;
const server = express();

// middleware 
server.use(cors()); 
server.use(bodyParser.json());

// routing

// CRUD - Create
server.post('/form',async (req,res)=>{

    // schema ./schema/userschema
    const user = new Users();
    user.username = req.body.username; //req.body frontend coming
    user.password = req.body.password; //req.body frontend coming
    const doc = await user.save();
    console.log(doc);
    res.json(doc);


    console.log( req.body )
    // res.send('connected successfuly')  
    // res.json(req.body);
})

// 
server.get('/form', async(req,res)=>{
        const docs = await Users.find({});
        res.json(docs)
})






server.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
