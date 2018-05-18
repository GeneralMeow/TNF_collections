const express = require('express');
const router = express.Router();
const collections = require('../collections');

/* GET home page. */
router.get('/', function (request, response, next) {
  const hits = collections.hits;

  response.render('index', { hits });
});

module.exports = router;
