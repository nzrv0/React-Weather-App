import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Weather, Dashboard, Locations } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/locations" element={<Locations />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
