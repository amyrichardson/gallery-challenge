const express = require('express');
const bodyParser = require('body-parser');
const imageRouter = require('./routes/images.router');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.use('/images', imageRouter);

app.listen(port, function(){
    console.log('up and running on port: ', port);
    
});