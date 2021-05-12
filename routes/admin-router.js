const express = require('express');
const adminCtrl = require('../controllers/admin-ctrl');
const db = require('../db');
const admin = require('../modules/admin-model')

const router = express.Router();


router.post('/Burgers', adminCtrl.createAdmin);
router.get('/Burgers', (req, res) => {

    return admin.find({})
        .then((date) => {
            console.log('date', date);
            res.status(200).send(date);
        })
        .catch((err) => {
            console.log(err);
            res.status(500);
        });
});
router.delete('/Burgers/:id',adminCtrl.deleteAdmin)
router.get('/Burgers/:id', adminCtrl.getadminById);
router.put('/Burgers/:id',adminCtrl.updateadmin)

module.exports = router;