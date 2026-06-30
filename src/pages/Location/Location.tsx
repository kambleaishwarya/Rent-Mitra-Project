import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Navigation, Search, Loader } from 'lucide-react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Location.css';

// Fix Leaflet's default icon path issues in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const popularCities = [
  { name: 'New York, NY', lat: 40.7128, lng: -74.0060 },
  { name: 'Los Angeles, CA', lat: 34.0522, lng: -118.2437 },
  { name: 'Chicago, IL', lat: 41.8781, lng: -87.6298 },
  { name: 'Nagpur, India', lat: 21.1458, lng: 79.0882 },
];

const MapUpdater = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  map.flyTo(center, 12);
  return null;
};

interface SearchResult {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

const Location: React.FC = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState<[number, number]>([21.1458, 79.0882]); 
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.trim().length > 2) {
        setIsSearching(true);
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${encodeURIComponent(searchQuery)}`);
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          console.error("Error searching location:", error);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSelectCity = (lat: number, lng: number) => {
    setPosition([lat, lng]);
    setSearchResults([]);
    setSearchQuery('');
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setPosition([pos.coords.latitude, pos.coords.longitude]),
        () => alert("Could not fetch location. Please ensure location permissions are enabled.")
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const confirmLocation = () => {
    navigate('/');
  };

  return (
    <div className="location-page animate-fade-in">
      <div className="location-header">
        <div className="location-header-left">
          <button onClick={() => navigate(-1)} className="icon-btn" aria-label="Back">
            <ArrowLeft size={24} />
          </button>
          <h1>Select Location</h1>
        </div>
      </div>

      <div className="search-input-wrapper" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <Search size={18} className="search-input-icon" style={{ position: 'absolute', left: '16px', zIndex: 10 }} />
        <input 
          type="text" 
          className="search-input-field" 
          placeholder="Type to search for a city..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ paddingLeft: '2.8rem', width: '100%' }}
        />
        {isSearching && <Loader size={18} className="search-input-icon" style={{ left: 'auto', right: '16px', animation: 'spin 1s linear infinite' }} />}
      </div>

      {searchResults.length > 0 && (
        <div className="search-results-container" style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginTop: '-8px', zIndex: 20 }}>
          <div className="city-list">
            {searchResults.map((result) => (
              <div 
                key={result.place_id} 
                className="city-item" 
                style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)' }}
                onClick={() => handleSelectCity(parseFloat(result.lat), parseFloat(result.lon))}
              >
                <MapPin size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span className="line-clamp-2" style={{ fontSize: '0.875rem' }}>{result.display_name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {!searchResults.length && (
        <>
          <button className="current-location-btn" onClick={handleUseCurrentLocation}>
            <Navigation size={20} />
            <span>Use my current location</span>
          </button>

          {/* The Leaflet Map */}
          <div className="map-container-wrapper">
            <MapContainer center={position} zoom={12} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} />
              <MapUpdater center={position} />
            </MapContainer>
          </div>

          <div className="popular-cities">
            <h3>Popular Cities</h3>
            <div className="city-list">
              {popularCities.map((city, index) => (
                <div key={index} className="city-item" onClick={() => handleSelectCity(city.lat, city.lng)}>
                  <MapPin size={18} color="var(--text-muted)" />
                  <span>{city.name}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <button className="confirm-location-btn" onClick={confirmLocation} style={{ marginTop: searchResults.length ? 'auto' : '16px' }}>
        Save Selected Location
      </button>
    </div>
  );
};

export default Location;
