export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Discover the Best of Madeira
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Explore tours, restaurants, stays and hidden gems across the island.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-10 bg-white rounded-2xl p-3 flex flex-col md:flex-row gap-3 shadow-2xl">
            <input
              type="text"
              placeholder="Search experiences..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 outline-none"
            />

            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Explore Madeira
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Whale Watching",
            "Restaurants",
            "Hiking",
            "Hotels",
            "Wellness",
            "Road Trips",
            "Beaches",
            "Hidden Gems",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-100 rounded-3xl p-8 text-center hover:scale-105 transition cursor-pointer"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Featured Experiences
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                  alt="Madeira"
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    Whale Watching Tour
                  </h3>

                  <p className="text-gray-600 mt-3">
                    Discover dolphins and whales in Madeira’s Atlantic waters.
                  </p>

                  <button className="mt-6 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-5xl font-bold">
          Start Exploring Madeira Today
        </h2>

        <p className="mt-6 text-xl text-gray-600">
          Find unforgettable experiences across the island.
        </p>

        <button className="mt-10 bg-black text-white px-8 py-4 rounded-2xl text-lg hover:bg-gray-800 transition">
          Discover Experiences
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-10 text-center text-gray-500">
        © 2026 Atlantic Guide — Discover Madeira
      </footer>
    </main>
  );
}