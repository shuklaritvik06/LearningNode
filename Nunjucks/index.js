const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
app.set('view engine', 'njk');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.get('/', (req, res) => {
    res.render('index',{names: ['John', 'Jane', 'Joe'],ingredients: { 'Jalebi': 'Sugar', 'Gulab Jamun': 'Milk', 'Rasgulla': 'Milk' }});
});
app.listen(9000);
