import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/Application.route';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
