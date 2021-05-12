const guide = require("../modules/guide-model");

const search = (req, res) => {
  const query = {};
  if (req.query.country) {
    query.country = req.query.country;
  }
  if (req.query.lang) {
    //todo fix query language array
    query.Language = req.query.lang;
  }
  if (req.query.city) {
    query.city = req.query.city;
  }
  if (req.query.cost) {
    query.cost = req.query.cost;
  }
 


  // const { lang, country,city,cost } = req.params;
  // const q = { Language: lang, country,city,cost }
debugger
  guide
    .find(query)
    .then((guides) => {

      if (!guides.length) {
        return res
          .status(404)
          .json({
            success: false,
            error: "not found a single guide in the chosen country",
          });
      }
      return res.status(200).json({ success: true, data: guides });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        success: false,
        error: error,
        message: "Could not get country!",
      });
    });
};

// const findByLanguage = (req, res) => {
//     guide.find({ Language: req.query.Language })
//         .then(guides => {
//             if (!guides.length) {
//                 return res.status(404).json({ success: false, error: 'not  found a single guide how speak Language' })
//             }
//             else {
//                 return res.status(200).json({ success: true, data: guides });
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             return res.status(400).json({
//                 success: false,
//                 error: error,
//                 message: 'Could not get Language!'
//             })
//         })
// }
// const findByCountryAndLanguage = (req, res) => {
//     guide.find({ Language: req.params.Language }, { country: req.params.country })
//         .then(guides => {
//             if (!guides.length) {
//                 return res.status(404).json({ success: false, error: 'not  found a single guide ' })
//             }
//             else {
//                 return res.status(200).json({ success: true, data: guides });
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             return res.status(400).json({
//                 success: false,
//                 error: error,

//             })
//         })
// }

module.exports = {
  // findByCountry,
  // findByLanguage,
  // findByCountryAndLanguage
  search,
};
