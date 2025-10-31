import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './PorductDetails.jsx'

import EarringsPage from './Top-Rated.jsx'
import Discover from './Discover.jsx'
import Cart from './Cart.jsx'

import MyProfile from './My-Profile.jsx'
import Wishlist from './Wishlist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/top-rated" element={<EarringsPage />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
