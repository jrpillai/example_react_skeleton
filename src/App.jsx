import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  return (
    <div>
      <h1>App is Working!</h1>
    </div>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

export default App;
