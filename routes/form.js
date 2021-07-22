const express = require('express');
const router = express.Router();

const form_controller = require('../controllers/form_controller');

router.get('/',  form_controller.view);
router.use('/submission', require('./form_submission'));


module.exports = router;