import * as tf from '@tensorflow/tfjs-node';
import { VGG16 } from '@tensorflow-models/vgg16';
import * as mongoose from 'mongoose';
import cloudinary from 'cloudinary';

// Load VGG16 model (chạy trên Node.js)
const loadModel = async () => {
    const model = await VGG16.load();
    return model;
};
