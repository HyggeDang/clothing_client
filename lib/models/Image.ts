import mongoose, { Schema, Document } from 'mongoose';

// Định nghĩa kiểu dữ liệu cho đối tượng Image
interface IImage extends Document {
  imageUrl: string;
  features: number[];
}

// Định nghĩa schema cho Image
const ImageSchema: Schema<IImage> = new Schema({
  imageUrl: { type: String, required: true },
  features: { type: [Number], required: true },
});

// Tạo model từ schema và export model đó
const ImageModel = mongoose.model<IImage>('Image', ImageSchema);

export default ImageModel;
