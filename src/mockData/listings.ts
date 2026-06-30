export interface Listing {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: string;
  postedAt: string;
  imageUrl: string;
  category: string;
  description: string;
  seller: {
    name: string;
    avatarUrl: string;
    joined: string;
  };
}

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'MacBook Pro 16" M2 Max - Like New',
    price: 2400,
    currency: '$',
    location: 'San Francisco, CA',
    postedAt: '2 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics',
    description: 'Selling my MacBook Pro 16-inch with M2 Max chip, 32GB RAM, and 1TB SSD. Battery health is at 100%. Comes with original box and charger.',
    seller: {
      name: 'Alex Johnson',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      joined: 'Member since 2021'
    }
  },
  {
    id: '2',
    title: 'Modern Leather Sofa',
    price: 450,
    currency: '$',
    location: 'Austin, TX',
    postedAt: '5 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Furniture',
    description: 'Beautiful mid-century modern leather sofa. Minor wear on the armrest but overall in great condition. Need it gone by this weekend.',
    seller: {
      name: 'Sarah Smith',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      joined: 'Member since 2023'
    }
  },
  {
    id: '3',
    title: '2019 Honda Civic EX',
    price: 18500,
    currency: '$',
    location: 'Seattle, WA',
    postedAt: '1 day ago',
    imageUrl: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Vehicles',
    description: 'Clean title, single owner. 45k miles. Regularly maintained at dealership. Apple CarPlay, sunroof, and lane assist.',
    seller: {
      name: 'Michael Davis',
      avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      joined: 'Member since 2020'
    }
  },
  {
    id: '4',
    title: 'Sony A7III Mirrorless Camera Body',
    price: 1200,
    currency: '$',
    location: 'New York, NY',
    postedAt: '3 days ago',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Photography',
    description: 'Low shutter count (under 10k). Body only. Screen protector since day 1. Selling to upgrade to A7IV.',
    seller: {
      name: 'Emily Chen',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      joined: 'Member since 2022'
    }
  }
];

export const categories = [
  { id: 'all', name: 'All', icon: 'LayoutGrid' },
  { id: 'electronics', name: 'Electronics', icon: 'MonitorSmartphone' },
  { id: 'vehicles', name: 'Vehicles', icon: 'Car' },
  { id: 'furniture', name: 'Furniture', icon: 'Armchair' },
  { id: 'realestate', name: 'Real Estate', icon: 'Home' },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt' },
];
