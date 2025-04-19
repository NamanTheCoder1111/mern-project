import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// generate jwt token 

 const generateToken = (id) => {
     return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn:'1h'});
 }

 // Register user
 export const registerUser = async (req, res) => {
    console.log("Request Body:", req.body);
    const { fullName, email, password, profileImageUrl } = req.body;

    // validation Check for missing fields 
     if(!fullName || !email || !password || !profileImageUrl){
        return res.status(400).json({ message: 'All fields are required' });
     }

     try{
        // check if user already exists
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: 'Email already in use' });
        }

        // create new user
        const user = await User.create({
             fullName,
             email,
             password,
             profileImageUrl,
        })
        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        })
     } catch (err) {
        res.status(500).json({ message: 'Error registering user',error:err.message });
     }
 }

 // Login user
 export const loginUser = async (req, res) => {
    const { email, password } = req.body;
     if(!email || !password){
        return res.status(400).json({ message: 'All fields are required' });
     }
     try{
         const user = await User.findOne({ email });
         if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({ message: 'Invalid creadentials' });
         }
         res.status(200).json({
             id: user._id,
             user,
             token: generateToken(user._id),
         })
     }catch (err){
         res.status(500).json({ message: 'Error logging in user',error:err.message})
     }
 }

 // get info of user
 export const  getUserInfo = async (req, res) => {
 }