const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/home_controller');

router.use(express.urlencoded());

router.get('/', home_controller.home);
router.use('/practice', require('./practice'));
router.use('/form', require('./form'));

module.exports = router;