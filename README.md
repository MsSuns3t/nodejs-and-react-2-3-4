# NodeJS and React Module assignment 2, 3 & 4

## How to start
First run "npm install" in a terminal from the root map.
Then run "npm run dev" to start the server on a local host.

## Components and features

### Components
- "Greeting.jsx": Simple component that returns a h2 element containing a greeting with a parameter for a name.
- "Card.jsx": Simple card component displaying an image, title, description and button with an onClick Alert.
- "BeverageList.jsx": Returns a list of beverages featuring an input field to sort by brand (Currently cocaCola and spriteInc) and also shows wether a given drink is currently available or not.

### Features
- App.jsx imports the aforementioned greeting component and the useState React hook. These are used to display a simple greeting followed by a button utilizing the useState hook to display a simple counter that increments by 1 every time it is clicked. Below is shown a collection of Card components which can be customized with a custom image, title, description and alert.
- A list of beverages that keeps track of their id, name, brand and availability in the components state.

## Dependencies
- "react": "^19.2.8",
- "react-dom": "^19.2.8"

## DevDependencies
- "@eslint/js": "^10.0.1",
- "@types/react": "^19.2.18",
- "@types/react-dom": "^19.2.4",
- "@vitejs/plugin-react": "^6.1.0",
- "eslint": "^10.9.0",
- "eslint-plugin-react-hooks": "^7.1.1",
- "eslint-plugin-react-refresh": "^0.5.4",
- "globals": "^17.11.0",
- "vite": "^8.2.2"
