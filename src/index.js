import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// =========================
// Modifications to eventually make:
// •Customize CSS
// •Refactor to DRY things out
// •Potentially could tweak the "flash"/conditional render to change color
//  based on work vs. break status. This would require lifting up isWorking state
//  to the App component so that it can be used in the conditional render.
//  (Maybe more trouble than it's worth? Try coloring & adding borders to the
//  app and see if that makes the UI look fine.)
