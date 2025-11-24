import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import ReactGA from "react-ga4";

// Initialize once when the app starts
ReactGA.initialize("G-Q8DBG8JBYL");

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>

);
