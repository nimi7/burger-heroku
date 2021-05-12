const Tourist = require('../modules/tourist-model');

const createTourist = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a tourist'
        })
    }

    const tourist = new Tourist(body);

    if (!tourist) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    tourist.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: tourist._id,
                message: 'user created!'
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error,
                message: 'tourist not created!'
               
            })
            
        })
}

const getTourists = (req, res) => {
    tourist.find()
        .then(tourists => {
            if (!tourists.length) {
                return res.status(404).json({ success: false, error: 'not a single tourist was found' })
            }
            else {
                return res.status(200).json({ success: true, data: tourists });
            }
        })
        .catch(error => {
            console.log(error);
            return res.status(400).json({
                success: false,
                error: error,
                message: 'Could not get tourists!'
            })
        })
}
const deleteTourist1 = async (req, res) => {
    await tourist.findOneAndDelete({ _id: req.params.id }, (err, tourist) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tourist) {
            return res.statuse(404).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, date: tourist })
    }).catch(err => console.log(err))
}

const getTouristById = async (req, res) => {
    await tourist.findOne({ _id: req.params.id }, (err, tourist) => {
        if (err) {
            return res.status(400).json({ success: false, error: `tourist not found` })
        }
        if (!tourist) {
            return res.status(404).json({ success: false, error: `tourist not found` })
        }
        return res.status(200).json({ success: true, data: tourist })
    }).catch(err => console.log(err))
}

const updateTourist = (req, res) => {
    const body = req.body

    tourist.updateOne({ _id: req.params.id }, body)
        .then(() => {
            return res.status(200).json({ seccess: true });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "tourist not updated!"
            })
        })

}


// const deleteUser = (req, res) => {
//     const id = req.params.id
//     User.deleteOne({ _id: id })
//         .then(() => {
//             return res.status(200).json({ success: true });
//         })
//         .catch(error => {
//             return res.status(400).json({
//                 error,
//                 message: 'User not deleted!'
//             })
//         })
// }




// const updatetourist1 = (req, res) => {
//     const body = req.body
//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: "you must provide a body to update",
//         })
//     }
//     tourist.first_name = body.first_name
//     tourist.last_name = body.last_name
//     tourist.class = body.class
//     tourist.lessons = body.lessons

//     tourist.save()
//         .than(() => {
//             return res.status(200).json({
//                 success: true,
//                 id: tourist._id,
//                 message: "tourist update!",
//             })

//         })
//         .catch(error => {
//             return res.status(400).json({
//                 error,
//                 message: "tourist not updated!"
//             })
//         })

// }


module.exports = {
    getTourists,
    getTouristById,
    createTourist,
    deleteTourist1,
    updateTourist
    
}