const express = require('express');
const { summarizeText } = require('../controllers/gptController');
const router = express.Router();

router.post('/summarizeText', summarizeText);

module.exports = router;