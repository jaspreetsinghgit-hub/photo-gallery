import Gallery from "./components/Gallery.jsx";

function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Photo Gallery
          </h1>

          <p className="mt-2 text-slate-600">
            Explore photos from photographers around the world.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Gallery />
      </div>
    </main>
  );
}

export default App;
