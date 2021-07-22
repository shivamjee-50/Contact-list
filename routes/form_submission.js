const express = require('express');
const router = express.Router();

const form_controller = require('../controllers/form_controller');

router.post('/', form_controller.submit)



module.exports = router;