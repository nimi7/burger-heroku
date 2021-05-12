const guide = require("../modules/guide-model");

const profile = (req, res) => {
    const query = {};
    guide
      .find(query)
      .then((guides) => {
  
        if (!guides.length) {
          return res
            .status(404)
            .json({
              success: false,
              error: "not found a single guide",
            });
        }
        return res.status(200).json({ success: true, data: guides });
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).json({
          success: false,
          error: error,
          message: "Could not get guide!",
        });
      });
  };
  
  

  
  module.exports = {
    profile
  };