import asyncHandler from '../utils/asyncHandler.js';
import ApiError  from '../utils/ApiError.js';
import { User } from '../models/user.models.js';
import uploadOnCloudinary from '../utils/cloudinary.js';
import ApiResponse from '../utils/ApiResponse.js';
const registerUser=asyncHandler(async(req,res)=>{
    // get details from user
    // validations - not empty 
    // check if user already exists username , email
    // check for images , check for avatar
    //upload them to cloudinary,avatar
    //create user object- create entry in db
    // remove password refresh token field  from response
    //check for user creation
    //return response 


    const {username,email,password,fullname}=req.body
    console.log("Email:",email);
    if (
        [fullname,username,email,password].some((item) => item?.trim() === '') 
    ){
     throw new ApiError(400,"Please fill all the fields")  
    }
    
    const existedUser=await User.findOne({
        $or:[{username},{email}]
         
    })
    if(existedUser){
        throw new ApiError(400,"Username or email already exists")
    }
     console.log(req.files);
     
     const avatarLocalPath=  req.files?.avatar[0]?.path;
    //  const coverImageLocalPath= req.files?.coverImage[0]?.path;
     let coverImageLocalPath;
     if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.lenght > 0){
        coverImageLocalPath=req.files.coverImage[0].path;
     };

  if(!avatarLocalPath) {
    throw new ApiError(400,"Please upload an avatar image")
  }

  
     const avatar= await  uploadOnCloudinary(avatarLocalPath)
        const coverImage= await uploadOnCloudinary(coverImageLocalPath)
        if(!avatar){
            throw new ApiError(500,"Failed to upload avatar image")
        }
const user= await User.create({
    username:username.toLowerCase(),
    email,
    password,
    fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
})
 const createdUser= await User.findById(user._id).select("-password -refreshTokens")
     if(!createdUser){
        throw new ApiError(500,"Failed to create user")
     }
     return res.status(201).json(
        new ApiResponse(200, createdUser, "User created successfully")
    );
    
});

// console.log("✅ Register API Hit");
    // res.status(200).json({message:"User registered successfully"});
export {registerUser};