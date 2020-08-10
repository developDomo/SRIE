const cloudinary = require('cloudinary').v2;

const resourceType = 'raw';
const environment = process.env.ENV;

const upload = (file, publicId) => {
  cloudinary.uploader.upload(`${file}`, { resource_type: resourceType, public_id: `${environment}/${publicId}` });
};

const url = (publicId) => cloudinary.url(`${environment}/${publicId}`, { resource_type: resourceType, force_version: false });

export default {
  upload,
  url,
};
