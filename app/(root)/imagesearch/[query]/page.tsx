import { useState } from 'react';
import UploadImage from '../../../../components/ImageUpload';

const SearchPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [features, setFeatures] = useState<number[] | null>(null);

  const handleImageUpload = (url: string, features: number[]) => {
    setImageUrl(url);
    setFeatures(features);
  };

  return (
    <div>
      <h1>Search Page</h1>

      {/* Thanh tìm kiếm với biểu tượng camera */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" placeholder="Tìm kiếm hình ảnh..." style={{ flex: 1, padding: '10px' }} />
        
        {/* Component UploadImage sẽ hiển thị biểu tượng camera */}
        <UploadImage onImageUpload={handleImageUpload} />
      </div>

      {/* Hiển thị ảnh và đặc trưng đã upload */}
      {imageUrl && (
        <div style={{ marginTop: '10px' }}>
          <h3>Uploaded Image</h3>
          <img src={imageUrl} alt="Uploaded" width={300} />
          <h4>Features</h4>
          <pre>{JSON.stringify(features, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
