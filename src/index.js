import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./components/navigation.js";
import 'bootstrap/dist/css/bootstrap.min.css'; 

ReactDOM.render(
    <React.StrictMode>
        <Navigation />
    </React.StrictMode>,
    document.getElementById('root')
);
