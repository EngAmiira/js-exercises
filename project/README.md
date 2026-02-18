# GlowFlow | Professional Makeup Salon Portal

## 🌟 Project Overview
GlowFlow is a client-side web application designed to streamline the booking and inspiration process for independent makeup artists. It solves the real-world problem of fragmented appointment tracking and provides a centralized "Beauty Profile" for clients.

## 🛠️ Tech Stack
- **HTML5 & CSS3**: Custom responsive grid layouts and modern luxury styling.
- **Vanilla JavaScript**: Core logic for DOM manipulation and state management.
- **Unsplash API**: Dynamic integration for real-time beauty trend inspiration.
- **Local Storage**: Persistent data management for user profiles and bookings.

## 🚀 Key Features
- **Dynamic Catalog**: Real-time filtering of services (Bridal, Glam, etc.) without page reloads.
- **Smart Booking**: Validated form system that prevents invalid dates and saves data locally.
- **User Dashboard**: Personalized experience that retrieves stored user data and upcoming appointments.
- **Trend Gallery**: Live fetch-based gallery using the Unsplash API to provide visual inspiration.

## 📝 API Documentation
This project integrates the **Unsplash REST API**. 
- **Endpoint used**: `https://api.unsplash.com/photos/random`
- **Functionality**: Fetches high-definition images filtered by the 'makeup-art' query to ensure niche relevance.