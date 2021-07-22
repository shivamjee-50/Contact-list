const express = require('express');
const router = express.Router();

const practice_controller = require('../controllers/practice_controller');

router.get('/', practice_controller.practice);



module.exports = router;