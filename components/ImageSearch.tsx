import React, { useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Giả sử bạn đã có một component ProductCard để hiển thị sản phẩm

const ImageSearch = () => {
  const [image, setImage] = useState<File | null>(null);  // Lưu ảnh tải lên
  const [imagePreview, setImagePreview] = useState<string | null>(null);  // Lưu URL ảnh tải lên để hiển thị
  const [results, setResults] = useState<any[]>([]);  // Lưu kết quả tìm kiếm

  // Xử lý khi người dùng chọn ảnh
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);

      // Tạo URL cho ảnh đã tải lên để hiển thị ngay lập tức
      const imageUrl = URL.createObjectURL(selectedImage);
      setImagePreview(imageUrl);
    }
  };

  // Xử lý khi nhấn nút tìm kiếm
  const handleSearch = async () => {
    if (image) {
      const formData = new FormData();
      formData.append('image', image);

      try {
        // Gửi yêu cầu tìm kiếm với ảnh tải lên
        const response = await axios.post('http://localhost:5000/predict', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        // Kiểm tra dữ liệu trả về từ API
        console.log('Dữ liệu trả về:', response.data);

        // Giả sử API trả về danh sách sản phẩm tương đồng
        if (response.data && response.data.products) {
          setResults(response.data.products);  // Giả sử API trả về mảng sản phẩm tương đồng
        } else {
          console.error('Dữ liệu trả về không hợp lệ');
          setResults([]);
        }
      } catch (error) {
        console.error('Error during image search:', error);
        setResults([]);  // Nếu có lỗi, đặt kết quả về mảng trống
      }
    }
  };

  return (
    <div>
      <div>
        {/* Input để chọn ảnh */}
        <input type="file" onChange={handleImageChange} />
        
        {/* Hiển thị ảnh đã tải lên */}
        {imagePreview && <img src={imagePreview} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />}
      </div>
      
      {/* Nút Tìm kiếm */}
      <button onClick={handleSearch}>Tìm kiếm</button>

      {/* Hiển thị kết quả tìm kiếm dưới dạng ProductCard */}
      {results.length > 0 ? (
        <div className="product-results">
          {results.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <p>Không có kết quả tìm kiếm nào</p>
      )}
    </div>
  );
};

export default ImageSearch;
