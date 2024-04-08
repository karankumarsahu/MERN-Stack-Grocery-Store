import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadOnCloudinary = async (localFilePath,  category) => {
    try {
        if (!localFilePath) return null;
        const folderPath = `Grocery_Store/${category}`;
        const {secure_url} = await cloudinary.uploader.upload(localFilePath, {
            folder: folderPath, 
            resource_type: "auto",
        });
        fs.unlink(localFilePath, (err) => {
            if (err) console.error(`Error deleting file ${localFilePath}:`, err);
        });
        return secure_url;
    } catch (error) {
        console.error(`Error uploading file ${localFilePath}:`, error);
        return null;
    }
};

export const deleteImage = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId, { invalidate: true });
        return result;
    } catch (error) {
        console.error(error);
        return { ok: false, message: "Error deleting file", errors: error };
    }
};
