import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// =========================
// Modifications to eventually make:
// •Refactor Classes into functions with hooks
// •Customize CSS
// •Refactor to DRY things out
// •Set up chime and color shift (probably need to give the app a border 
// or else this will look weird)
// •Create work/break session counters