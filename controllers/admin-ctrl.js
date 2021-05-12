const admin = require('../modules/admin-model');




const createAdmin = async (req, res, next) => {
   
    const {Food , Discription,WitheDiscription, Pic,Price,Rating} = req.body
      const post = new Burgers({
        Food,
        Discription,
        WitheDiscription,
        Pic,
        Price,
        Rating
      });
      try {
          await post.save();
      } catch(err) {
          return next(err);
      }
      res.redirect('/');
    };

const deleteAdmin = async (req, res) => {
    await admin.findOneAndDelete({ _id: req.params.id }, (err, admin1) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!admin1) {
            return res.statuse(404).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, date: admin1 })
    }).catch(err => console.log(err))
}


const getAdmins = (req, res) => {
    admin.find()
        .then(admins => {
            if (!admins.length) {
                console.log('admins',admins)
                return res.status(404).json({ success: false, error: 'not a single admin was found'})
            }
            else {
                console.log('admins',admins)
                // return res.status(200).json({ success: true, data: admins });
                return res.status(200).send(admins);
              
            }
        })
        .catch(error => {
            console.log(error);
            return res.status(400).json({
                success: false,
                error: error,
                message: 'Could not get admins!'
            })
        })
}

const getadminById = async (req, res) => {
    await admin.findOne({ _id: req.params.id }, (err, admin) => {
        if (err) {
            return res.status(400).json({ success: false, error: `admin not found` })
        }
        if (!admin) {
            return res.status(404).json({ success: false, error: `admin not found` })
        }
        return res.status(200).json({ success: true, data: admin })
    }).catch(err => console.log(err))
}
const updateadmin = (req, res) => {
    const body = req.body

    admin.updateOne({ _id: req.params.id }, body)
        .then(() => {
            return res.status(200).json({ seccess: true });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "admin not updated!"
            })
        })

}
module.exports = {
    createAdmin,
    getAdmins,
    deleteAdmin,
    getadminById,
    updateadmin
}