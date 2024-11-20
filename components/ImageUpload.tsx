import React, { useState } from "react";

const UploadImage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [response, setResponse] = useState<any>(null);

  // Xử lý khi người dùng chọn hình ảnh
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!image) {
      alert("Please select an image first!");
      return;
    }
  
    // Tạo FormData để gửi ảnh
    const formData = new FormData();
    formData.append("image", image);
  
    try {
      // Gửi POST request tới Flask API
      const response = await fetch("http://127.0.0.1:5000/predict/", {
        method: "POST",
        body: formData,
      });
  
      // Kiểm tra xem phản hồi có thành công không
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);  // In lỗi từ server để debug
        throw new Error("Failed to fetch response");
      }
  
      // Chuyển phản hồi thành JSON
      const result = await response.json();
      setResponse(result);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Có lỗi khi tải ảnh lên! Vui lòng kiểm tra lại.");
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Tìm kiếm</button>
      </form>

      {response && (
        <div>
          <h3>Kết quả:</h3>
          <ul>
            {response.similar_products && response.similar_products.map((item: { product_name: string, similarity: number }, index: number) => (
              <li key={index}>
                {item[0]} - Similarity: {item[1].toFixed(4)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
