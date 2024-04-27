const express = require('express');

const { generate_new_short_url, get_analytics } = require('../controllers/url');
const { model } = require('mongoose');

const router = express.Router();

router.post('/', generate_new_short_url);

router.get('/analytics/:shortID', get_analytics )

module.exports = router;