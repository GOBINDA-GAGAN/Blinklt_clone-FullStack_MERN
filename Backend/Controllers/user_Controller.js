import userModel from "../Models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const {name,email,password}=req.body()

    if(!name || !email || !password){
      return res
        .status(400)
        .json({
          message: "provide email, password,register",
          error: true,
          success: false,
        });
    }

    const user= await userModel.findOne({email})
    if(user){
      return  res.json({
        message: "user already exist",
        error: true,
        success: false,
      })

    }

    const salt= await  bcrypts








  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
};
