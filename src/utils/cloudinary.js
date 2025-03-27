import {v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from 'fs';


(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,    
        api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    })});
 
    const uploadOnCloudinary = async (filePath) => {
        try {
            if (!filePath) return null;
    
            // Upload the file on Cloudinary
            const response = await cloudinary.uploader.upload(filePath, {
                resource_type: "auto",
            });
    
            // File has been uploaded successfully
            console.log("File uploaded successfully", response.url);
    
            return response;
        } catch (error) {
         fs.unlinkSync(filePath);//remove the locally saved temporary file as the upload failed
         return null;
            
        }
    };

    export default uploadOnCloudinary;


    //  // Upload an image
    //  const uploadResult = await cloudinary.uploader
    //    .upload(
    //        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //            public_id: 'shoes',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });
    
    // console.log(uploadResult);