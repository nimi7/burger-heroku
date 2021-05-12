const mongoose = require('mongoose');

console.log('process.env.PORT',process.env.PORT);
console.log('process.env.Uri',process.env.URI);

mongoose
    .connect(process.env.URI || "mongodb+srv://Nimrod-Admin:nimi0528266913@cluster0.yzitu.mongodb.net/FoodStore?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology:true })
    .catch(e => {
        console.error('Connection error', e.message)
    });
const db = mongoose.connection;

module.exports = db;

