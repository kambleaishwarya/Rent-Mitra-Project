import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Tag, MessageSquare, Heart } from 'lucide-react';
import './Notifications.css';

const dummyNotifications = [
  {
    id: 1,
    type: 'message',
    title: 'New message from John Doe',
    message: 'Is the MacBook still available?',
    time: '2 mins ago',
    unread: true,
  },
  {
    id: 2,
    type: 'price',
    title: 'Price dropped on Honda Civic',
    message: 'The item you favorited dropped from $18,500 to $18,000.',
    time: '3 hours ago',
    unread: true,
  },
  {
    id: 3,
    type: 'system',
    title: 'Welcome to RentMitra',
    message: 'Start selling your items today for free!',
    time: '2 days ago',
    unread: false,
  },
  {
    id: 4,
    type: 'favorite',
    title: 'Your ad is getting attention',
    message: '5 people favorited your "Modern Leather Sofa" ad today.',
    time: '3 days ago',
    unread: false,
  }
];

const Notifications: React.FC = () => {
  const navigate = useNavigate();

  const getIcon = (type: string) => {
    switch (type) {
      case 'message': return <MessageSquare size={20} />;
      case 'price': return <Tag size={20} />;
      case 'favorite': return <Heart size={20} />;
      default: return <Bell size={20} />;
    }
  };

  return (
    <div className="notifications-page animate-fade-in">
      <div className="notifications-header">
        <button onClick={() => navigate(-1)} className="icon-btn" aria-label="Back">
          <ArrowLeft size={24} />
        </button>
        <h1>Notifications</h1>
      </div>

      <div className="notifications-list">
        {dummyNotifications.map(notification => (
          <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
            <div className="notification-icon-wrapper">
              {getIcon(notification.type)}
            </div>
            <div className="notification-content">
              <span className="notification-title">{notification.title}</span>
              <span className="notification-message">{notification.message}</span>
              <span className="notification-time">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
