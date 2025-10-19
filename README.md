# Volunteer Card Project

## Approach
I built this project using React, TypeScript, and Vite for a fast, modern development experience. Tailwind CSS was used for styling, with a custom color palette and Montserrat font to match Sobbatical’s branding. I registered on the Sobbatical website to check colors and adapt the UI for consistency. Filtering and card data are handled with static JSON for simplicity and clarity, as described in the assignment. I also added a details page for each opportunity, even though it was not required, to demonstrate how the user experience could be extended. Responsiveness was a key focus, ensuring the interface works smoothly on desktop, tablet, and mobile devices.

## What I Would Improve With More Time
- Implement an interactive map showing locations of organizations
- Add register/login functionality for users
- Connect to a real API and database for volunteer activities
- Add authentication and user profiles
- Expand filtering and sorting options
- Add animations and micro-interactions
- Improve accessibility and add more tests
- Polish the details page with richer content

## Assumptions & Creative Decisions
- Used Vite instead of Next.js for speed and simplicity, but I am comfortable with Next.js as well
- Registered on Sobbatical to match branding and colors
- Filtering and data are handled with static JSON for clarity
- Added a details page for each opportunity as a bonus feature
- Focused on responsive design

## Automated Testing
This project includes automated tests for key React components using [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Tests cover rendering, interactivity, and accessibility for components like the header and volunteer cards.

### How to Run Tests
1. Make sure dependencies are installed:
   ```bash
   npm install
   ```
2. Run all tests:
   ```bash
   npx vitest run
   ```
3. For watch mode (auto re-run on file changes):
   ```bash
   npx vitest
   ```

Test files are located alongside their components (e.g., `src/components/VolunteerCard.test.tsx`).

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/IvanaPeric/volunteer-card.git
   cd volunteer-card
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Author
Created by Ivana Peric. For questions or feedback, please reach out via GitHub.
