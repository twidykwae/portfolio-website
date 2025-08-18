import React from "react";

export default function Projects() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-32 relative inline-block">
          Projects
          <span className="absolute left-0 bottom-10 h-1 bg-white w-0 animate-expand mt-10"></span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[1, 2, 3].map((num) => (
            <a
              key={num}
              href="https://github.com/twidykwae?tab=repositories"
              className="relative card bg-base-100 w-72 shadow-md group overflow-hidden"
            >
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt={`Project ${num}`}
                  className="rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Project {num}</h2>
                <p>
                  Short description about this project.
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold">View on GitHub</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
