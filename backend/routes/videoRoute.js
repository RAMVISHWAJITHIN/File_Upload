// routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const { createVideo, generateSignature } = require('../controllers/videoController');

router.post('/videos', createVideo);
router.post('/sign-upload', generateSignature);

module.exports = router;
