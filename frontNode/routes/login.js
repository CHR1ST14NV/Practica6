var express = require('express');
const findClient = require('../bin/sql');
var router = express.Router();

/* GET home page. */
router.get('/login/', function(req, res, next) {
    res.render('login', { tipo: 'Normal' });
});

router.get('/admin/', function(req, res, next) {
    res.render('admin', { tipo: 'Admin' });
});
//router.post('/api/',findClient());
module.exports = router;