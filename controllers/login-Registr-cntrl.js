const TouristtModel = require("../modules/tourist-model");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

const login = (req, res) => {
    //  TouristtModel.findOne({ email: req.body.email })
    // .then(tourist=>{
    //     if(tourist<1){
    //         res.status(401).json({
    //             error:'Auth filed'
    //         })
    //     }
    //     bcrypt.compare(req.body.password,tourist.password,(err,result)=>{
    //         if(err){
    //             res.status(401).json({
    //                 error:'Auth failed'
    //             });
    //         }
    //         if(result){
    //             console.log(result)
    //             res.status(200).json({
    //                 message:'Auth successful'
    //             });
    //         }
    //         res.status(401).json({
    //             message:'Auth failed'
    //         })
    //     })
    // })
    // .catch(err=>{
    //     res.status(500).json({
    //         error:err
    //     })
    // })
};

const registeruser = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({
                error: err,
            });
        } else {
            const tourist = TouristtModel({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash,
                role: req.body.role,

                comments_History: {
                    text: req.body.text,
                    date: req.body.date,
                    tourGuideID: req.body.id,
                },
            });
            tourist
                .save()
                .then((result) => {
                    console.log(result);
                    res.status(201).json({
                        message: "user created",
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        error: err,
                    });
                });
        }
    });
};

module.exports = {
    login,
    registeruser,
};
