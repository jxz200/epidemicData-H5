import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import SelectProvince from "./pages/selectProvince";
import OverallInfo from "./components/homePage/overallInfo";
import ProvinceInfo from "./components/homePage/provinceInfo";
import NotFound from "./pages/NotFound";

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<OverallInfo />} />
                    <Route path="/province" element={<ProvinceInfo />} />
                </Route>
                <Route path="/selectProvince" element={<SelectProvince />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
