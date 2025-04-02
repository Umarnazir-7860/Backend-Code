import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Cloudinary configuration at the top of the file
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,    
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (filePath) => {
    try {
        if (!filePath) return null;

        // Upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto", // auto will let Cloudinary determine the file type (image/video/etc)
        });

        // File has been uploaded successfully
        console.log("File uploaded successfully", response.url);
        return response;
    } catch (error) {
        // If upload fails, remove the temporary file from the local system
        fs.unlinkSync(filePath);
        console.error("Error uploading file:", error);
        return null;
    }
};

export default uploadOnCloudinary;
