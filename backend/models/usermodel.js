const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  date_of_birth: {
    type: String,
    require: true,
  },
  profession: {
    type: String,
    require: true,
    
  },
  shoesize: {
    type: Number,
    require: true,
  },
  haircolor:{
    type: String,
    required: true,
  },
  hairlength:{
    type: String,
    required: true,
  },
  waistsize:{
    type: String,
    required: true,
  },
  height:{
    type: Number,
    required: true,
  },
  weight:{
    type: Number,
    required: true,
  },
  castings:{
    type:String,
    required: true,
  }
});


const User = new mongoose.model("User", userSchema);

module.exports = User;
