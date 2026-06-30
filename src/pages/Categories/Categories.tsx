import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, LayoutGrid, MonitorSmartphone, Car, Armchair, Home, Shirt, MoreHorizontal, Briefcase, Camera, Coffee, Smartphone } from 'lucide-react';
import { categories } from '../../mockData/listings';
import './Categories.css';

const AllIconsMap: Record<string, React.ElementType> = {
  LayoutGrid, MonitorSmartphone, Car, Armchair, Home, Shirt, 
  MoreHorizontal, Briefcase, Camera, Coffee, Smartphone
};

// Expanded list for the full page
const allCategories = [
  ...categories.filter(c => c.id !== 'all'),
  { id: 'jobs', name: 'Jobs', icon: 'Briefcase' },
  { id: 'services', name: 'Services', icon: 'Coffee' },
  { id: 'mobile', name: 'Mobile Phones', icon: 'Smartphone' },
  { id: 'bikes', name: 'Bikes', icon: 'Car' },
  { id: 'more', name: 'Other Items', icon: 'MoreHorizontal' },
];

const Categories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-page animate-fade-in">
      <div className="categories-header">
        <button onClick={() => navigate(-1)} className="icon-btn" aria-label="Back">
          <ArrowLeft size={24} />
        </button>
        <h1>All Categories</h1>
      </div>

      <div className="categories-grid">
        {allCategories.map(cat => {
          const Icon = AllIconsMap[cat.icon] || LayoutGrid;
          return (
            <Link to="/" key={cat.id} className="category-grid-item">
              <div className="category-grid-icon">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <span className="category-grid-name">{cat.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
