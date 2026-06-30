import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, MonitorSmartphone, Car, Armchair, Home as HomeIcon, Shirt } from 'lucide-react';
import ListingCard from '../../components/listing/ListingCard';
import { mockListings, categories } from '../../mockData/listings';
import './Home.css';

const IconMap: Record<string, React.ElementType> = {
  LayoutGrid,
  MonitorSmartphone,
  Car,
  Armchair,
  Home: HomeIcon,
  Shirt
};

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Simulate network fetch when category changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredListings = activeCategory === 'all' 
    ? mockListings 
    : mockListings.filter(l => l.category.toLowerCase() === activeCategory);

  return (
    <div className="home-container animate-fade-in">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-text">
          <h1>Find what you need</h1>
          <p>Over 10,000+ items listed everyday in your area</p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Hero" 
          className="hero-image"
        />
      </div>

      {/* Categories */}
      <section>
        <div className="section-title">
          <h2>Browse Categories</h2>
          <Link to="/categories" className="view-all-link">View all</Link>
        </div>
        <div className="categories-container no-scrollbar">
          {categories.map((category) => {
            const Icon = IconMap[category.icon];
            return (
              <div 
                key={category.id} 
                className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="category-icon-wrapper">
                  {Icon && <Icon size={24} />}
                </div>
                <span className="category-name">{category.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fresh Recommendations */}
      <section>
        <div className="section-title">
          <h2>Fresh Recommendations</h2>
        </div>
        <div className="listings-grid">
          {loading ? (
            // Skeleton loaders
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="skeleton skeleton-card"></div>
            ))
          ) : filteredListings.length > 0 ? (
            filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-muted)' }}>
              No listings found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
