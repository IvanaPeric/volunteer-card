import React from 'react';

const ProjectDetails: React.FC = () => (
  <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mt-8 font-sans">
    <h1 className="text-3xl font-bold text-sobGreen mb-4">Volunteer Card Project</h1>
    <h2 className="text-xl font-semibold text-sobGreen mb-2">About</h2>
    <p className="mb-4 text-sobGreen">
      This project is a modern, professional volunteer opportunity dashboard built with React, TypeScript, and Tailwind CSS. It features a responsive card grid, advanced filtering, sidebar navigation, and a clean, branded UI inspired by Sobbatical. The codebase is designed for maintainability and extensibility, with a focus on accessibility and user experience.
    </p>
    <h2 className="text-xl font-semibold text-sobGreen mb-2">Features</h2>
    <ul className="mb-4 list-disc list-inside text-sobGreen">
      <li>Responsive card grid with vertical and horizontal layouts</li>
      <li>Advanced filters: search, field, location, and saved opportunities</li>
      <li>Sidebar navigation for Home and Saved tabs</li>
      <li>Modern UI with custom colors, icons, and branding</li>
      <li>Details page for each opportunity</li>
      <li>Mobile-first design and accessibility best practices</li>
    </ul>
    <h2 className="text-xl font-semibold text-sobGreen mb-2">Future Improvements</h2>
    <ul className="mb-4 list-disc list-inside text-sobGreen">
      <li>Interactive map showing locations of organizations</li>
      <li>Register/login functionality for users</li>
      <li>API/database integration for volunteer activities</li>
      <li>Expanded filtering and sorting options</li>
      <li>More animations and micro-interactions</li>
      <li>Improved accessibility and additional tests</li>
      <li>Richer details page content</li>
    </ul>
    <h2 className="text-xl font-semibold text-sobGreen mb-2">How to Use</h2>
    <ol className="mb-4 list-decimal list-inside text-sobGreen">
      <li>Clone the repository and install dependencies with <code>npm install</code></li>
      <li>Start the development server using <code>npm run dev</code></li>
      <li>Browse opportunities, use filters, and view details</li>
      <li>Switch between Home and Saved tabs to manage your favorites</li>
    </ol>
    <h2 className="text-xl font-semibold text-sobGreen mb-2">Tech Stack</h2>
    <ul className="mb-4 list-disc list-inside text-sobGreen">
      <li>React & TypeScript</li>
      <li>Tailwind CSS</li>
      <li>Radix UI & shadcn/ui for icons and components</li>
      <li>Vite for fast development</li>
    </ul>
    <h2 className="text-xl font-semibold text-sobGreen mb-2">Author</h2>
    <p className="mb-2 text-sobGreen">Created by Ivana Peric. For questions or feedback, please reach out via GitHub.</p>
    <h2 className="text-xl font-semibold text-sobGreen mb-2">Repository</h2>
    <p className="mb-2 text-sobGreen">
      <a
        href="https://github.com/IvanaPeric/volunteer-card"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-sobGreen hover:text-sobGreen/80"
      >
        View the project on GitHub
      </a>
    </p>
  </div>
);

export default ProjectDetails;
