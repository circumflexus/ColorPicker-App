import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import App from './components/App/App';
import Main from './components/Main/Main';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/color-picker" element={<App />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);
