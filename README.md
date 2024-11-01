# Myntra Clone

This is a Myntra clone project built with React and Redux. It simulates the functionality of an e-commerce site where users can browse items, add them to their shopping bag, and view summaries.

## Project Structure

```
.
├── Backend
│   ├── data
│   │   └── items.json               # JSON file containing items for sale
│   ├── app.js                       # Express server configuration 
│   ├── package.json                 # Backend dependencies
│   └── package-lock.json
├── Frontend
│   ├── node_modules
│   ├── public
│   └── src
│       ├── components               # Reusable UI components
│       │   ├── BagItem.jsx          # Component for displaying an individual item in the bag
│       │   ├── BagSummary.jsx       # Component showing the summary of items in the bag
│       │   ├── FetchItems.jsx       # Component for fetching and displaying items
│       │   ├── Footer.jsx           # Footer component
│       │   ├── Header.jsx           # Header component
│       │   ├── HomeItem.jsx         # Component for displaying items on the home page
│       │   ├── LoadingSpinner.jsx   # Loading spinner component
│       ├── routes                   # Page route components
│       │   ├── App.jsx              # Main application entry point
│       │   ├── Bag.jsx              # Bag page component
│       │   └── Home.jsx             # Home page component
│       ├── store                    # Redux store and slices
│       │   ├── bagSlice.js          # Redux slice for managing shopping bag actions
│       │   ├── fetchStatusSlice.js  # Slice for tracking fetch status
│       │   ├── index.js             # Root store configuration
│       ├── index.css                # Global styling
│       └── main.jsx                 # Main entry point for the frontend
├── .gitignore                       # Git ignore file
└── README.md                        # Project README
```

## Features

- **Browse Items**: Users can browse available items.
- **Add to Bag**: Add items to the shopping bag.
- **Remove from Bag**: Remove items from the shopping bag.
- **Bag Summary**: View a summary of items in the bag.

## Technologies Used

- **Frontend**: React, Redux Toolkit
- **Backend**: Node.js, Express
- **Styling**: CSS ( Bootstrap )

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/myntra-clone.git
   cd myntra-clone
   ```

2. **Install backend dependencies**:
   ```bash
   cd Backend
   npm install
   ```

3. **Install frontend dependencies**:
   ```bash
   cd ../Frontend
   npm install
   ```

### Running the Project

1. **Start the backend server**:
   ```bash
   cd Backend
   npm start
   ```

2. **Start the frontend**:
   ```bash
   cd ../Frontend
   npm start
   ```

### Redux Slices

- `bagSlice.js`: Manages the state of the shopping bag, including actions like `addToBag` and `removeFromBag`.
- `fetchStatusSlice.js`: Handles the status of data fetching.
