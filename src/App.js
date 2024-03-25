import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editor from './Editor';
import Display from './Display';
//just a router
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Editor />} />
                <Route path="/display" element={<Display />} />
            </Routes>
        </Router>
    );
}

export default App;
