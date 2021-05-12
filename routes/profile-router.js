const express = require('express');
const myProfileCtrl = require('../controllers/myprofile-ctrl');
const guiderCtrl = require('../controllers/guide-ctrl');

const router = express.Router();


router.get('/',myProfileCtrl.profile)
router.get('/:id', guiderCtrl.getGuideById);


module.exports = router;