import React from 'react';
import {Route, Routes} from "react-router";
import {MAIN_PAGE} from "../app/providers/RouterConfig";
import MainPage from "./main/MainPage";

const Routing = () => {
    return (
        <Routes>
            <Route path={MAIN_PAGE} element={<MainPage/>}/>
        </Routes>
    );
};

export default Routing;
