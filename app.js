var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.render('index', { 'heading': 'Computer and Laptop Repair Service ', 'subtitle': '  Are you new in the city? Searching for a Computer and Laptop Repair? We give you the best professional Computer and Laptop services in Kerala.' });
});
app.get('/about', function(req, res) {
    res.render('about', { 'heading': 'About Us', 'subtitle': 'On a Mission to Civilize Computers.' });
});
app.get('/contact', function(req, res) {
    res.render('contact', {
        'heading': 'Contact',
        'subtitle': 'Feel Free to Contact us for Help and Feedback.'
    });
});
app.listen(3000);
console.log("Server is running on Port 3000 ... ");