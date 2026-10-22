import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos.js";
import { favouritesReducer } from "../reducers/favouritesReducer.js";
import PhotoCard from "./PhotoCard.jsx";

const STORAGE_KEY = "photo-gallery-favourites";

// Loading initial favourites
function loadInitialFavourites() {
  try {
    // Retrieving favourites from localStorage 
    const savedFavourites = localStorage.getItem(STORAGE_KEY);
    if (savedFavourites === null) return [];

    const parsedFavourites = JSON.parse(savedFavourites);

    // Validating that the parsed data is an array of strings
    if (
      Array.isArray(parsedFavourites) &&
      parsedFavourites.every((id) => typeof id === "string")
    ) {
      return [...new Set(parsedFavourites)];
    }

    return [];
  } catch {
    return [];
  }
}

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [searchTerm, setSearchTerm] = useState("");

  // Using useReducer to manage favourites state
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    loadInitialFavourites,
  );

  // Saving favourites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } catch {
      console.error("Unable to save favourites to localStorage.");
    }
  }, [favourites]);

  // Using useCallback to memoize the search handler function
  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  // Using useMemo to filter photos based on the search term
  const filteredPhotos = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return photos.filter((photo) => photo.author.toLowerCase().includes(query));
  }, [photos, searchTerm]);

  if (loading) {
    return (
      <div className="flex min-h-64 items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div
            className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
            role="status"
            aria-label="Loading photos"
          />
          <p className="text-sm text-slate-600">Loading photos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="rounded-xl bg-red-50 p-6 text-center text-red-700"
      >
        {error}
      </div>
    );
  }

  return (
    <section>
      <div className="mb-6">
        <label
          htmlFor="photo-search"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Search photos by author
        </label>

        <input
          id="photo-search"
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Enter an author's name..."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavourite={favourites.includes(photo.id)}
            onToggleFavourite={() =>
              dispatch({
                type: "TOGGLE_FAVOURITE",
                photoId: photo.id,
              })
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
