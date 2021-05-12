const express = require('express');
const touristCtrl = require('../controllers/tourist-ctrl');

const router = express.Router();

router.post('/tourist', touristCtrl.createTourist);

router.get('/tourists', touristCtrl.getTourists);

router.get('/tourists/:id', touristCtrl.getTouristById);

router.delete('/tourist/:id', touristCtrl.deleteTourist1);

router.put('/tourist/:id', touristCtrl.updateTourist);



module.exports = router;

