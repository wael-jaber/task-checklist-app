# Task Checklist App

![example branch parameter](https://github.com/wael-jaber/task-checklist-app/actions/workflows/main.yml/badge.svg?branch=main)
![example branch parameter](https://github.com/wael-jaber/task-checklist-app/actions/workflows/storybook.yml/badge.svg?branch=develop)
![example branch parameter](https://github.com/wael-jaber/task-checklist-app/actions/workflows/ci.yml/badge.svg?branch=develop)
![Codecov](https://codecov.io/gh/wael-jaber/task-checklist-app/branch/develop/graph/badge.svg)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://wael-jaber.github.io/task-checklist-app/storybook)

A standalone React + TypeScript application that allows users to create tasks with individual checklists, featuring offline data persistence and image marker tagging.

## Application Preview

![Dashboard Demo](docs/demo.gif)

## Features

- Task Management: Create, edit, and delete tasks with customizable checklists
- Checklist Status Tracking: Track the status of individual checklist items (not started, in progress, blocked, done)
- Offline Functionality: Work with tasks even without an internet connection using RxDB
- Multi-User Support: Simple user management without authentication
- Map View: View and filter tasks by status and search terms
- Image Marker Tagging: Tag tasks with markers on an image for visual reference

## Technology Stack

- Frontend: React 18, TypeScript, Material UI
- State Management: Zustand
- Offline Database: RxDB with IndexedDB
- Routing: React Router
- Build Tool: Vite
- Testing: Vitest, Testing Library
- UI Development: Storybook
- Containerization: Docker, Nginx

## Estimated Time Required

| Feature               | Estimated Time |
| --------------------- | -------------- |
| Project Setup         | 2 hours        |
| UI Components         | 8 hours        |
| State Management      | 4 hours        |
| Routing               | 2 hours        |
| Offline Functionality | 5 hours        |
| Image Marker Tagging  | 3 hours        |
| Testing & Debugging   | 4 hours        |
| **Total**             | **28 hours**   |

## Live Demos

- **Application**: [https://wael-jaber.github.io/task-checklist-app/](https://wael-jaber.github.io/task-checklist-app/)
- **Storybook**: [https://wael-jaber.github.io/task-checklist-app/storybook](https://wael-jaber.github.io/task-checklist-app/storybook)

## Running the Application

### Prerequisites

- Node.js (v18+)
- pnpm (v8+)
- Git
- A modern web browser that supports IndexedDB (Chrome, Firefox, Safari, Edge)
- For Docker deployment: Docker and Docker Compose installed
- For development: A code editor (VS Code recommended)
- For testing the offline functionality: Network throttling capability (can use browser DevTools)

### Local Development

```bash
# Clone the repository
git clone https://github.com/wael-jaber/task-checklist-app.git
cd task-checklist-app

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Start Storybook
pnpm storybook
```

### Production Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Using Docker

```bash
# Build and run with Docker Compose
docker-compose up -d

# Access the application at http://localhost:8080/task-checklist-app
```

## Deployment

The application is deployed using GitHub Pages:

### Main Application Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the main branch using GitHub Actions. The workflow handles:

- Building the React application
- Configuring the base path for GitHub Pages
- Publishing to the `gh-pages` branch

### Storybook Deployment

Storybook is also deployed to a subdirectory on GitHub Pages:

- URL: [https://wael-jaber.github.io/task-checklist-app/storybook](https://wael-jaber.github.io/task-checklist-app/storybook)
- The deployment process builds Storybook separately and places it in the `/storybook` directory of the deployed site

## Development Notes

### Design Approach

While initially planning to follow a provided Figma design, due to time constraints and the fact that the design didn't cover all aspects of the application, the UI was largely designed on the fly during development. This approach allowed for more flexibility and faster iteration while ensuring all functional requirements were met.

### Component-Driven Development

The application was built using a component-driven development approach:

1. First created reusable UI components without business logic
2. Developed stores for state management
3. Integrated components with stores through container components
4. Implemented offline functionality with RxDB

### Project Structure

The project follows a feature-based structure to organize code logically:

```
task-checklist-app/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── checklist/  # Checklist-related components
│   │   ├── common/     # Shared UI components
│   │   ├── layout/     # Layout components
│   │   ├── tasks/      # Task-related components
│   │   └── user/       # User authentication components
│   ├── containers/     # Components connected to state
│   ├── db/             # RxDB database setup
│   ├── hooks/          # Custom React hooks
│   ├── routes/         # Application routing
│   ├── store/          # Zustand state management
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
```

### Multi-User Functionality

- Users can enter their name to access the application
- No authentication is required—simply entering a name creates a new user if one doesn't exist
- User data is segregated so users can only see their own tasks
- User sessions are preserved between visits

### Offline-First Strategy

The application uses RxDB to store data in the browser's IndexedDB, allowing users to:

- Create and edit tasks while offline
- Automatically persist changes locally
- Receive notifications about connectivity status
- Work with all features regardless of network availability

### Checklist Item Status Management

Checklist items can have different statuses:

- Not Started
- In Progress
- Blocked (with reason)
- Done
- Final Installation Done

This allows for detailed tracking of task progress and identifying bottlenecks.

### Advanced Feature: Image Marker Tagging

- Tasks can be tagged with markers on a floor plan image
- Users can toggle between list and map views
- Clicking on markers displays the associated task details
- The view mode (list/map) is preserved during navigation
