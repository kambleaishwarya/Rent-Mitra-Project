import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search as SearchIcon, Clock, X } from 'lucide-react';
import { mockListings } from '../../mockData/listings';
import type { Listing } from '../../mockData/listings';
import ListingCard from '../../components/listing/ListingCard';
import './Search.css';

const recentSearches = [
  'iPhone 13 Pro',
  'Office Chair',
  'Honda Civic 2020',
  'Apartment for rent',
  'MacBook Air M1'
];

const Search: React.FC = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Listing[]>([]);

  useEffect(() => {
    // Focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Filter listings based on search query in real-time
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      const filtered = mockListings.filter(
        listing => listing.title.toLowerCase().includes(query) || 
                   listing.category.toLowerCase().includes(query)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
    if (inputRef.current) inputRef.current.focus();
  };

  const handleRecentSearchClick = (term: string) => {
    setSearchQuery(term);
  };

  return (
    <div className="search-page animate-fade-in">
      {/* We removed the <form> wrapper completely to prevent accidental navigations */}
      <div className="search-header-input">
        <button type="button" onClick={() => navigate(-1)} className="icon-btn" aria-label="Back">
          <ArrowLeft size={24} />
        </button>
        <div className="search-input-wrapper">
          <SearchIcon size={18} className="search-input-icon" />
          <input 
            ref={inputRef}
            type="text" 
            className="search-input-field" 
            placeholder="Find cars, mobile phones and more..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <X size={18} className="search-clear-icon" onClick={clearSearch} />
          )}
        </div>
      </div>

      {searchQuery.trim() === '' ? (
        <div className="recent-searches">
          <h3>Recent Searches</h3>
          <div className="recent-search-list">
            {recentSearches.map((term, index) => (
              <div key={index} className="recent-search-item" onClick={() => handleRecentSearchClick(term)}>
                <Clock size={16} />
                <span>{term}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="search-results">
          <h3 className="search-results-header">
            {results.length} results for "{searchQuery}"
          </h3>
          {results.length > 0 ? (
            <div className="search-grid">
              {results.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
              No listings found matching your search.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
