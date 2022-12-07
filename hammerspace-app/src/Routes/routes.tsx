import React from "react";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Login/>} />
                <Route path="/register" element={<Register />}/>
                <Route path="/home" element={
                    <ProtectedRoutes>
                        <h1>
                            amo meu amor
                        </h1>
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    );
}

export default Routering;