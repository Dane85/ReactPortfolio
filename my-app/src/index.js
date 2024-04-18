import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import statement
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";



const root = createRoot(document.getElementById('root'));
root.render(<App />);



