export default function Home() {
  const experiences = [
    {
      title: "Whale & Dolphin Watching",
      image:
        "https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=1200&auto=format&fit=crop",
      price: "from €45",
    },
    {
      title: "Levada Walks",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      price: "from €25",
    },
    {
      title: "Jeep Tour — West Coast",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      price: "from €60",
    },
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      {/* HERO */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        {/* NAVBAR */}
        <header className="relative z-20 flex items-center justify-between px-10 py-6 text-white">
          <div className="text-2xl font-bold tracking-wide">
            Atlantic Guide
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#">Explore</a>
            <a href="#">Restaurants</a>
            <a href="#">Experiences</a>
            <a href="#">Stays</a>
            <a href="#">Travel Guide</a>
          </nav>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex items-center h-full px-8">
          <div className="max-w-4xl text-white">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Discover the Best of Madeira
            </h1>

            <p className="mt-8 text-2xl text-gray-200 max-w-2xl">
              Compare, explore and book unforgettable experiences across the
              island.
            </p>

            {/* SEARCH */}
            <div className="mt-10 bg-white rounded-3xl p-4 flex flex-col md:flex-row gap-4 shadow-2xl max-w-5xl">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="flex-1 px-5 py-4 rounded-2xl border border-gray-200 outline-none text-black"
              />

              <input
                type="text"
                placeholder="Search experiences..."
                className="flex-1 px-5 py-4 rounded-2xl border border-gray-200 outline-none text-black"
              />

              <button className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Explore Madeira
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Whale Watching",
            "Hiking",
            "Restaurants",
            "Luxury Hotels",
            "Road Trips",
            "Wellness",
            "Beaches",
            "Hidden Gems",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-100 rounded-3xl p-8 hover:scale-105 transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">
              Top Experiences
            </h2>

            <button className="text-lg font-medium">
              View all →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray-500">
                      4.9 ★★★★★
                    </span>

                    <span className="font-semibold">
                      {item.price}
                    </span>
                  </div>

                  <button className="mt-6 w-full bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold">
          Start Exploring Madeira
        </h2>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Find the best tours, restaurants, hotels and hidden gems across the
          island.
        </p>

        <button className="mt-10 bg-black text-white px-10 py-5 rounded-2xl text-lg hover:bg-gray-800 transition">
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
