import React from "react"; // Import React to use JSX and React components
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering the app to the DOM
import App from "./App"; // Import the main App component

// Create a root container for the React application, targeting the DOM element with id 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root container
root.render(
    <React.StrictMode>
        <App />{" "}
        {/* The entire app is wrapped in React.StrictMode for highlighting potential problems */}
    </React.StrictMode>
);
