const express = require('express');
const loginAndRegisterCtrl = require('../controllers/login-Registr-cntrl');
const router = express.Router();


router.post('/Login',loginAndRegisterCtrl.login)
router.post('/register',loginAndRegisterCtrl.registeruser)



module.exports = router;

