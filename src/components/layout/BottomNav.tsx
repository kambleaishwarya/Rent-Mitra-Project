import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Plus, Heart, User } from 'lucide-react';
import './Layout.css';

const BottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav glass">
      <NavLink 
        to="/" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <Home size={24} strokeWidth={location.pathname === '/' ? 2.5 : 2} />
        <span>Home</span>
      </NavLink>

      <NavLink 
        to="/favorites" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <Heart size={24} strokeWidth={location.pathname === '/favorites' ? 2.5 : 2} />
        <span>My Ads</span>
      </NavLink>

      <NavLink to="/create" className="nav-item nav-item-sell">
        <div className="sell-btn-inner">
          <Plus size={28} color="white" strokeWidth={3} />
        </div>
      </NavLink>

      <NavLink 
        to="/chats" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={location.pathname === '/chats' ? 2.5 : 2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <span>Chats</span>
      </NavLink>

      <NavLink 
        to="/profile" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <User size={24} strokeWidth={location.pathname === '/profile' ? 2.5 : 2} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
