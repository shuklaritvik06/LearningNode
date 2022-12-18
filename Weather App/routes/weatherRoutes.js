const express= require('express');
const cache = require('apicache').middleware;
const controllers = require('../controllers/weatherController');
const router= express.Router();

router.get('/',controllers.getHome);
router.get('/api',cache('1 hour'),controllers.getWeather);

module.exports = router;