// Constants
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');

// CORS
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Build - Static for Front-End
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build/static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Database Connection
const strConnnection = 'mongodb+srv://admin:admin@drq.oculr.mongodb.net/AdsDB?retryWrites=true&w=majority';
mongoose.connect(strConnnection, { useNewUrlParser: true });

// Schema
const Schema = mongoose.Schema;

// Ad Schema
const adSchema = new Schema({
    Name: String,
    Description: String,
    Image: String
})

// Model
const adModel = mongoose.model('ad', adSchema);

// Home page
// app.get('/', (req, res) => {
//     // Main Code
//     res.send('Hello World!')
// })

// /api/ads/:id
app.get('/api/ads/:id', (req, res) => {
    console.log(req.params.id);

    adModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

// Edit Ad
app.put('/api/ads/:id', (req, res) => {
    console.log('Update: ' + req.params.id);

    // Find by ID and Update the ad
    adModel.findByIdAndUpdate(req.params.id,
        req.body,
        (err, data) => {
            res.send(data);
        })
})

// Delete Ad
app.delete('/api/ads/:id', (req, res) => {
    console.log("Delete " + req.params.id);

    adModel.findByIdAndDelete({_id:req.params.id}, (err, data) => {
        if (err)
            res.send(err);
        res.send(data);
    })
})

// /api/ads
app.get('/api/ads', (req, res) => {

    // Getting data from Database
    adModel.find((err, data) => {
        res.json(data);
    })
})

// Post
app.post('/api/ads', (req, res) => {
    console.log(req.body);

    // Create Model
    adModel.create({
        Name: req.body.Name,
        Description: req.body.Description,
        Image: req.body.Image
    })

    res.send('Data Received!')
})

// All other urls
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})

// Listen
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})