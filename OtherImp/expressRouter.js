const express = require('express');
const router = express.Router();

router.get("",()=>{})  // Use router instead of app in the different routes file we create.

module.exports = router // Export

// Now in app.js require the route file and then use it as a middleware.

app.use('scope',routerImport);
