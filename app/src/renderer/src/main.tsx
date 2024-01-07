import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={ <Layout /> }></Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
