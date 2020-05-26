const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://guzzmega:GuzzMega91@trainingcluster-iqpwy.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//req.query  = Query params (filtros)
//req.params = Route params (edição, delete) 
//req.body   = Corpo da requisição
app.use(express.json());
app.use(routes);

app.listen(3333);