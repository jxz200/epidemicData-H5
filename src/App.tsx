import React from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import SelectProvince from "./pages/selectProvince";

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/selectProvince" element={<SelectProvince />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
