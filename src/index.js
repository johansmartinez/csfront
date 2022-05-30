import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ViewProvider } from './context/ViewProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ViewProvider>
    <App />
  </ViewProvider>
);

