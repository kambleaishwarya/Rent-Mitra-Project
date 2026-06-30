import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Heart, MapPin, Clock, MessageSquare, Phone } from 'lucide-react';
import { mockListings } from '../../mockData/listings';
import type { Listing } from '../../mockData/listings';
import './ListingDetails.css';

const ListingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [listing, setListing] = useState<Listing | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Simulate fetching
    if (id) {
      const found = mockListings.find(l => l.id === id);
      setListing(found || null);
    }
  }, [id]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    showToast(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  if (!listing) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading or not found...</div>;
  }

  return (
    <div className="details-container animate-fade-in">
      <div className="details-image-container">
        <button className="details-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <ArrowLeft size={20} />
        </button>
        <div className="details-actions">
          <button className="details-back-btn" style={{ position: 'relative', top: 0, left: 0 }} aria-label="Share" onClick={() => showToast('Link copied to clipboard!')}>
            <Share2 size={20} />
          </button>
          <button 
            className="details-back-btn" 
            style={{ position: 'relative', top: 0, left: 0, color: isFavorite ? 'var(--danger)' : '' }} 
            aria-label="Favorite" 
            onClick={toggleFavorite}
          >
            <Heart size={20} fill={isFavorite ? 'var(--danger)' : 'none'} />
          </button>
        </div>
        <img src={listing.imageUrl} alt={listing.title} className="details-image" />
      </div>

      <div className="details-content">
        <div className="details-header">
          <h1 className="details-price">{listing.currency}{listing.price.toLocaleString()}</h1>
          <h2 className="details-title">{listing.title}</h2>
          
          <div className="details-meta">
            <div className="meta-item">
              <MapPin size={16} />
              <span>{listing.location}</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>{listing.postedAt}</span>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h3>Description</h3>
          <p className="details-description">
            {listing.description}
          </p>
        </div>

        <div className="details-section">
          <h3>Seller Info</h3>
          <div className="seller-profile">
            <div className="seller-info">
              <img src={listing.seller.avatarUrl} alt={listing.seller.name} className="seller-avatar" />
              <div className="seller-details">
                <h4>{listing.seller.name}</h4>
                <p>{listing.seller.joined}</p>
              </div>
            </div>
            <button className="view-profile-btn" onClick={() => showToast('Profile view coming soon')}>View Profile</button>
          </div>
        </div>
        
        {/* Empty space for sticky footer on mobile */}
        <div style={{ height: '80px', display: 'block', width: '100%' }} className="mobile-only"></div>
      </div>

      <div className="sticky-action-bar glass">
        <button className="btn-primary" onClick={() => showToast('Opening chat...')}>
          <MessageSquare size={20} />
          Chat
        </button>
        <button className="btn-outline" onClick={() => showToast('Calling seller...')}>
          <Phone size={20} />
          Call
        </button>
      </div>

      {/* Simple Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'var(--surface)',
          color: 'var(--text-main)',
          padding: '12px 24px',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border)',
          zIndex: 100,
          fontWeight: 500,
          fontSize: '0.875rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {toast}
        </div>
      )}
    </div>
  );
};

export default ListingDetails;
