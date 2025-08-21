import React from "react";

export default function About() {
  return (
    <section className="bg-black text-white flex justify-center items-center px-8">
      <div className="max-w-3xl text-center space-y-6 mb-20">
        <p className="text-gray-300 text-lg font-light leading-relaxed">
          I’m <span className="font-semibold text-white">Twidy Kwae</span>. I’m studying Computer Science at Taylor University with a concentration in Information Systems and minors in Cybersecurity and Data Science. I'm into fashion, love dressing up, and taking photos.
        </p>

        <div className="flex justify-center pt-11">
          <a
            href="/Twidy's_resume.pdf"
            target="_blank"
            className="flex items-center gap-2 bg-white text-black border border-black px-8 py-2 rounded-3xl font-medium hover:bg-gray-200 transition"
          >
            <span>Resume</span>
            <svg
              className="w-5 h-5 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
