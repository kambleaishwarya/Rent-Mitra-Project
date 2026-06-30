# RentMitra

RentMitra is a modern, mobile-first classifieds and rental platform built with React, TypeScript, and Vite. Designed to provide a premium user experience, it features dynamic routing, interactive maps, real-time search filtering, and polished UI micro-interactions.

## ✨ Features

- **Mobile-First Design**: Optimized for touch interactions with a persistent bottom navigation bar and responsive grids.
- **Interactive Map Integration**: Uses Leaflet (`react-leaflet`) for a fully interactive location selection experience with smooth "fly-to" animations.
- **Real-Time Search**: Instant product filtering with a seamless search interface and recent search history.
- **Premium UI/UX**: Includes skeleton loading states, glassmorphism effects, custom CSS variables, and toast notifications.
- **Dynamic Categories**: Browse products by category with auto-filtering capabilities.
- **Mock Data Ready**: Pre-populated with realistic dummy data for seamless local development and testing.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Animations)
- **Icons**: Lucide React
- **Maps**: Leaflet & React-Leaflet

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kambleaishwarya/Rent-Mitra-Project.git
   cd Rent-Mitra-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5174` in your browser to view the application.

## 📁 Project Structure

```text
src/
├── components/       # Reusable UI components (Header, BottomNav, ListingCard)
├── pages/            # Main application routes (Home, Search, Location, Profile, etc.)
├── mockData/         # Dummy data interfaces and initial state arrays
├── App.tsx           # Application router configuration
├── main.tsx          # Application entry point
└── index.css         # Global design tokens, variables, and utility classes
```

## 📝 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles TypeScript and builds the app for production.
- `npm run preview`: Locally preview the production build.

---
*Built with ❤️ using React, TypeScript, and Vite.*
