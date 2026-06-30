import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, MapPin } from 'lucide-react';
import './Layout.css';

const Header: React.FC = () => {
  return (
    <header className="header glass">
      <Link to="/" className="header-logo">
        <span style={{ fontSize: '1.75rem' }}>O</span>LX
      </Link>
      
      <div className="header-actions">
        <Link to="/location" className="icon-btn" aria-label="Location">
          <MapPin size={20} />
        </Link>
        <Link to="/search" className="icon-btn" aria-label="Search">
          <Search size={20} />
        </Link>
        <Link to="/notifications" className="icon-btn" aria-label="Notifications">
          <Bell size={20} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
