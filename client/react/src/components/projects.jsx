import React from "react";

export default function Projects() {

    const projects = [
        {
            name: "Save-A-Child",
            description: "Orphanage Delivery ",
            image: "",
            link: "https://www.github.com/twidykwae"
        },
        {
            name: "Basketball Shooting Percentage",
            description: "",
            image: "",
            link: ""
        },
        {
            name: "Helicopter ML Project",
            description: "",
            image: "",
            link: ""
        },
        {
            name: "AI Battleship Player",
            description: "Built a C++ game AI using minimax and heuristics with probabilistic targeting, achieving a 67% win rate against competing AI",
            image: "/Screenshot 2025-08-18 170553.png",
            link: "https://www.github.com/twidykwae"
        },
    ]
  return (
    <section className="bg-black text-white py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
                <a 
                href="https://www.github.com/twidykwae"
                target="_blank"
                className="relative card bg-gray-900 w-72 shadow-md group overflow-hidden rounded-xl"
                >
                <figure>
                    <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                />
                </figure>
                <div className="card-body text-white bg">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
              </div>
                </a>
            ))}

        </div>
    </section>
  )
}
