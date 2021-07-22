const express = require('express');
const router = express.Router();

const form_controller = require('../controllers/form_controller');

router.get('/',  form_controller.view);
router.post('/', form_controller.submit);


module.exports = router;