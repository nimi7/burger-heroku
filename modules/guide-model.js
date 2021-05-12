const mongoose = require("mongoose");

const schema = mongoose.Schema;

const tripSchema = new schema({
  description: { type: String, required: true },
  name: [{ type: String, required: true }],
});

const commentSchema = new schema({
  text: { type: String },
  date: { type: Date, default: Date.now },
  rating:{type:Number , default: 2 }
});

const guideSchema = new schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    cost: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    role: { type: Number, required: true },
    Language: [{ type: String, required: true }],
    trips: [tripSchema],
    comments: [commentSchema],
    summery:{type:String,required:true}
  },
  { timestamps: true }
);
const guide = new mongoose.model("guides", guideSchema);
module.exports = guide;
