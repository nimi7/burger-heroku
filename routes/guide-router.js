const express = require('express');
const guiderCtrl = require('../controllers/guide-ctrl');

const router = express.Router();

router.post('/guide', guiderCtrl.createGuide);

router.get('/guides', guiderCtrl.getGuides);

router.get('/guides/:id', guiderCtrl.getGuideById);

router.delete('/guide/:id', guiderCtrl.deleteGuide1);

router.put('/guide/:id', guiderCtrl.updateGiude);

module.exports = router;