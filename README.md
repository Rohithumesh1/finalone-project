# Resollect Portfolio Frontend

This project is a React implementation of the Resollect Portfolio UI, as part of a take-home assignment.

## Features

- Responsive design that works on both desktop and mobile devices
- Interactive portfolio data table with filtering, search, and selection capabilities
- Upload document functionality
- Modern UI with clean design

## Tech Stack

- React 18
- React Icons
- CSS for styling
- GitHub for version control

## Project Structure

The project follows a component-based architecture:

- `Navigation` - Side navigation menu
- `Portfolio` - Main portfolio page
  - `FilterTabs` - Tab navigation for different portfolio types
  - `SearchBar` - Search functionality
  - `TableActions` - Actions for table selections
  - `PortfolioTable` - Data table with interactive features
  - `UploadModal` - Document upload modal

## How to Run

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

The application is deployed at [deployment-url].

## Implementation Details

### Responsive Design

The UI is fully responsive and adapts to different screen sizes:
- On desktop, it shows a sidebar navigation with the main content area
- On mobile, it switches to a more compact layout with optimized navigation

### Data Handling

- Uses mock data for demonstration purposes
- Implements filtering, searching, and selection functionality
- All table actions are functional

### Upload Feature

The document upload feature allows users to:
- Select document type and name
- Add remarks
- Upload files

## Future Improvements

- Add authentication
- Implement data persistence with backend integration
- Add more interactive features for data visualization
- Implement unit and integration tests

## Author

[Your Name]