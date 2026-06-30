import React from 'react';
import { Settings, CreditCard, Heart, Package, ChevronRight, LogOut, HelpCircle } from 'lucide-react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <div className="profile-container animate-fade-in">
      <div className="profile-header">
        <img 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
          alt="Profile" 
          className="profile-avatar" 
        />
        <div className="profile-info">
          <h1>Alex Johnson</h1>
          <p>alex.johnson@example.com</p>
          <p>Member since 2021</p>
        </div>
      </div>

      <div className="profile-menu">
        <div className="menu-item">
          <div className="menu-item-left">
            <Package size={20} className="menu-icon" />
            <span>My Ads</span>
          </div>
          <ChevronRight size={20} className="menu-arrow" />
        </div>
        
        <div className="menu-item">
          <div className="menu-item-left">
            <Heart size={20} className="menu-icon" />
            <span>Favorites</span>
          </div>
          <ChevronRight size={20} className="menu-arrow" />
        </div>
        
        <div className="menu-item">
          <div className="menu-item-left">
            <CreditCard size={20} className="menu-icon" />
            <span>Payment Methods</span>
          </div>
          <ChevronRight size={20} className="menu-arrow" />
        </div>
        
        <div className="menu-item">
          <div className="menu-item-left">
            <Settings size={20} className="menu-icon" />
            <span>Settings</span>
          </div>
          <ChevronRight size={20} className="menu-arrow" />
        </div>
        
        <div className="menu-item">
          <div className="menu-item-left">
            <HelpCircle size={20} className="menu-icon" />
            <span>Help & Support</span>
          </div>
          <ChevronRight size={20} className="menu-arrow" />
        </div>
        
        <div className="menu-item" style={{ marginTop: 'var(--spacing-4)' }}>
          <div className="menu-item-left" style={{ color: 'var(--danger)' }}>
            <LogOut size={20} color="var(--danger)" />
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
