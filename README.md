# Pokédex Explorer

A React + TypeScript application to browse Pokémons, view their stats and details — built with Redux Toolkit and Clean Architecture principles.

## Features

- Browse Pokémon list with pagination
- View Pokémon detail (stats, types, abilities)
- Clean Architecture (Domain, Application, Infrastructure, UI)
- Redux Toolkit for global state management
- Custom hooks for business logic separation
- TailwindCSS for styling

## Tech Stack

- React 19 + TypeScript
- Redux Toolkit + React Redux
- React Router DOM
- Axios
- TailwindCSS v4
- PokeAPI (public, no auth required)

## Architecture

```
src/
├── domain/              # Entities and repository contracts
│   ├── entities/
│   └── ports/
├── application/         # Use cases and custom hooks
│   ├── useCases/
│   └── hooks/
├── infrastructure/      # API adapter and Redux store
│   ├── adapters/
│   └── store/redux/
└── ui/                  # Pages and components
    ├── pages/
    └── components/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ariamsalazar/pokemon-list-redux-tooltik-arquit.git
cd pokedex-explorer

# Install dependencies
npm install
```

### Running the app

```bash
# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Screenshots
- Pokemon List + Pagination
<img width="737" height="369" alt="image" src="https://github.com/user-attachments/assets/c33b0a9c-8357-4e0b-8461-c65b83c4080f" />

- Pokemon detail page
<img width="931" height="732" alt="image" src="https://github.com/user-attachments/assets/7748c416-b29d-4338-bf84-dc5fa6e18ea8" />
