import React from 'react';
import { createRoot } from 'react-dom/client';


import App from './App';
import './index.css';

//Renders the App element into the DOM (specifically at the root)
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);