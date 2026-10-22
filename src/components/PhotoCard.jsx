function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
      <img
        src={`https://picsum.photos/id/${photo.id}/600/400`}
        alt={`Photo by ${photo.author}`}
        loading="lazy" 
        decoding="async" // as there is multiple images, decoding asynchronously will improve performance
        className="h-56 w-full object-cover"
      />

      <div className="flex items-center justify-between gap-3 p-4">
        <p className="truncate font-medium text-slate-800">{photo.author}</p>

        <button
          type="button"
          onClick={onToggleFavourite}
          // aria-label and aria-pressed attributes are used for accessibility to indicate the button's purpose and state to screen readers
          aria-label={
            isFavourite
              ? `Remove ${photo.author}'s photo from favourites`
              : `Add ${photo.author}'s photo to favourites`
          }
          aria-pressed={isFavourite}
          className={`shrink-0 rounded-full p-2 transition-colors ${
            isFavourite
              ? "text-rose-600 hover:bg-rose-50"
              : "text-slate-500 hover:bg-rose-50 hover:text-rose-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default PhotoCard;
