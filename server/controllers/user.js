import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {

      if(!email){
        return res.status(404).json({ message: "Please enter the email" });
      }
      else if(!password){
        return res.status(404).json({ message: "Please enter the password" });
      }
      else{const existingUser = await User.findOne({ email });
  
      if (!existingUser) {
        console.log("User does not exist");
        return res.status(404).json({ message: "User doesn't exist" });
      }
  
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
  
      if (!isPasswordCorrect) {
        console.log("Invalid credentials");
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        'test',
        { expiresIn: "1h" }
      );
  
      res.status(200).json({ result: existingUser, token });
      console.log(existingUser);
      }
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  

export const signup= async(req, res) => {
    console.log(req.body)
    const { firstName, lastName, email, password, confirmpassword} = req.body

    try{

      if(!firstName || !lastName || !email || !password || !confirmpassword){
        return res.status(400).json({ message: "Please fill all the fields" });
      }else{
        const existingUser = await User.findOne({email});

        if(existingUser){
            console.log("User already exists")
            return res.status(400).json({message:"User already exist"})
        } 
        if( password !== confirmpassword ) {
            console.log("Passwords donot match")
            return res.status(400).json({message:"Passwords don't match"})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})
        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "1h"})
        res.status(200).json({ result, token });
        console.log("Signup successful:", result);
      }
        
    }catch(error){
        res.status(500).json({message: 'Something went wrong'})

    }
}