const guide = require('../modules/guide-model');

const createGuide = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Guide'
        })
    }

    const Guide = new guide(body);
    

    if (!Guide) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    Guide.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: Guide._id,
                message: 'user created!'
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error,
                message: 'Guide not created!'

            })

        })
}

const getGuides = (req, res) => {
    guide.find()
        .then(guides => {
            console.log(guides.data)
            if (!guides.length) {
                return res.status(404).json({ success: false, error: 'not a single guide was found' })
            }
            else {
                return res.status(200).json({ success: true, data: guides });
            }
        })
        .catch(error => {
            console.log(error);
            return res.status(400).json({
                success: false,
                error: error,
                message: 'Could not get guides!'
            })
        })
}
const deleteGuide1 = async (req, res) => {
    await guide.findOneAndDelete({ _id: req.params.id }, (err, Guide) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Guide) {
            return res.statuse(404).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, date: Guide })
    }).catch(err => console.log(err))
}
const getGuideById = async (req, res) => {
    await guide.findOne({ _id: req.params.id }, (err, guide) => {
        if (err) {
            return res.status(400).json({ success: false, error: `guide not found` })
        }
        if (!guide) {
            return res.status(404).json({ success: false, error: `guide not found` })
        }
        return res.status(200).json({ success: true, data: guide })
    }).catch(err => console.log(err))
}

const updateGiude = (req, res) => {
    const body = req.body

    guide.updateOne({ _id: req.params.id }, body)
        .then(() => {
            return res.status(200).json({ seccess: true });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "Guide not updated!"
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




// const updateGuide1 = (req, res) => {
//     const body = req.body
//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: "you must provide a body to update",
//         })
//     }
//     guide.first_name = body.first_name
//     guide.last_name = body.last_name
//     guide.class = body.class
//     guide.lessons = body.lessons

//     guide.save()
//         .than(() => {
//             return res.status(200).json({
//                 success: true,
//                 id: guide._id,
//                 message: "Guide update!",
//             })

//         })
//         .catch(error => {
//             return res.status(400).json({
//                 error,
//                 message: "Guide not updated!"
//             })
//         })

// }


module.exports = {
    getGuides,
    getGuideById,
    createGuide,
    deleteGuide1,
    updateGiude

}