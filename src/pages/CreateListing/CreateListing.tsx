import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, ArrowLeft } from 'lucide-react';
import { categories } from '../../mockData/listings';
import './CreateListing.css';

const CreateListing: React.FC = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Create a fake object URL for preview
      const url = URL.createObjectURL(e.target.files[0]);
      setImages([...images, url]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className="create-container animate-fade-in">
      <div className="create-header">
        <button onClick={() => navigate(-1)} className="icon-btn" aria-label="Back">
          <ArrowLeft size={24} />
        </button>
        <h1>Post an Ad</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Upload Photos</label>
          <div className="image-upload-area" onClick={() => document.getElementById('image-upload')?.click()}>
            <UploadCloud size={48} className="upload-icon" />
            <span className="upload-text">Click to upload images</span>
            <span className="upload-hint">Up to 10 images allowed</span>
            <input 
              type="file" 
              id="image-upload" 
              accept="image/*" 
              style={{ display: 'none' }} 
              onChange={handleImageUpload}
            />
          </div>
          
          {images.length > 0 && (
            <div className="image-preview-grid">
              {images.map((img, i) => (
                <img key={i} src={img} alt="Preview" className="image-preview-item" />
              ))}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="title" className="form-label">Ad Title</label>
          <input 
            type="text" 
            id="title" 
            className="form-input" 
            placeholder="Key features of your item" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="category" className="form-label">Category</label>
          <select id="category" className="form-select" required>
            <option value="">Select a category</option>
            {categories.filter(c => c.id !== 'all').map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">Price</label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>$</span>
            <input 
              type="number" 
              id="price" 
              className="form-input" 
              style={{ paddingLeft: '2.5rem' }}
              placeholder="0.00" 
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea 
            id="description" 
            className="form-textarea" 
            placeholder="Include condition, features and reason for selling"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Post Now</button>
      </form>
    </div>
  );
};

export default CreateListing;
