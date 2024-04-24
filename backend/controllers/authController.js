const User = require("../models/usermodel");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to subscription task");
  } catch (error) {
    console.log(error);
  }
};

//Registration Logic

const register = async (req, res, next) => {
  try {
    // console.log(req.body);
    const {
      firstname,
      lastname,
      gender,
      date_of_birth,
      profession,
      shoesize,
      haircolor,
      hairlength,
      waistsize,
      height,
      weight,
      castings,
    } = req.body;

   
    const userCreated = await User.create({
      firstname,
      lastname,
      gender,
      date_of_birth,
      profession,
      shoesize,
      haircolor,
      hairlength,
      waistsize,
      height,
      weight,
      castings,
    });

    res.status(201).json({
      msg: "Registration Successfull",
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};



module.exports = { home, register};
