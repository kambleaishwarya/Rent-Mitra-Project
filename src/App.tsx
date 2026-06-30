import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import ListingDetails from './pages/ListingDetails/ListingDetails';
import CreateListing from './pages/CreateListing/CreateListing';
import Profile from './pages/Profile/Profile';
import Categories from './pages/Categories/Categories';
import Search from './pages/Search/Search';
import Location from './pages/Location/Location';
import Notifications from './pages/Notifications/Notifications';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="item/:id" element={<ListingDetails />} />
          <Route path="create" element={<CreateListing />} />
          <Route path="profile" element={<Profile />} />
          <Route path="favorites" element={<div style={{ padding: '2rem', textAlign: 'center' }}>My Ads / Favorites coming soon</div>} />
          <Route path="chats" element={<div style={{ padding: '2rem', textAlign: 'center' }}>Chats coming soon</div>} />
          <Route path="categories" element={<Categories />} />
          <Route path="location" element={<Location />} />
          <Route path="search" element={<Search />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
