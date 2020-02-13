const multer = require('multer');
const cloudinaryStorage = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = cloudinaryStorage({
    cloudinary,
    folder: 'artesaniasMexico',
    allowedFormats: ["jpg", "png"],
    filename: function(_, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;