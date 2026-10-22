# Photo Gallery App

A responsive photo gallery built with **React, Vite, and Tailwind CSS** as part of the Celebrare Frontend React Internship pre-screening assignment.

## Features

- Fetches 30 photos from the Picsum Photos API.
- Displays photos in a responsive grid.
- Shows loading and error states while fetching data.
- Filters photos by author name in real time.
- Allows users to add and remove favourites.
- Persists favourites across page refreshes using `localStorage`.
- Uses a custom `useFetchPhotos` hook to separate data-fetching logic from UI components.
- Uses `useReducer` to manage favourite state and `useCallback` and `useMemo` for the required search implementation.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API
- React Hooks: `useState`, `useEffect`, `useReducer`, `useCallback`, and `useMemo`
- Browser `localStorage`

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/jaspreetsinghgit-hub/photo-gallery.git
```

Navigate into the project directory:

```bash
cd photo-gallery
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## API

This project uses the [Picsum Photos API](https://picsum.photos/v2/list?limit=30) to retrieve photo data.

## Project Structure

```text
src/
├── components/
│   ├── Gallery.jsx
│   └── PhotoCard.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favouritesReducer.js
├── App.jsx
├── index.css
└── main.jsx
```

## Available Scripts

- `npm run dev` — Start the development server.
- `npm run build` — Build the application for production.
- `npm run lint` — Check the code with Oxlint.
- `npm run preview` — Preview the production build locally.

## Assignment

Developed as part of the Celebrare Frontend React Internship pre-screening assignment.

## Author

Jaspreet Singh