import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';
import type { Listing } from '../../mockData/listings';
import './ListingCard.css';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/item/${listing.id}`} className="listing-card animate-fade-in">
      <div className="listing-image-container">
        <img src={listing.imageUrl} alt={listing.title} className="listing-image" loading="lazy" />
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`} 
          onClick={handleFavoriteClick} 
          aria-label="Add to favorites"
        >
          <Heart size={18} />
        </button>
      </div>
      <div className="listing-content">
        <div className="listing-price">{listing.currency}{listing.price.toLocaleString()}</div>
        <h3 className="listing-title">{listing.title}</h3>
        <div className="listing-footer">
          <div className="listing-location">
            <MapPin size={12} />
            <span>{listing.location.split(',')[0]}</span>
          </div>
          <span className="listing-time">{listing.postedAt}</span>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
