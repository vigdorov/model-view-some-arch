import React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

// import {FormFunc} from "./FormFunc";
import {CalculatorNew} from './CalculatorNew';
import {CalculatorFunc} from './CalculatorFunc';


import './storages';
import {Routing} from './Routing';

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Routing />} >
            <Route path="/:u-menya-big-penis?/:id?/:color/" element={<Routing />} />
        </Route>
    )
);

root.render(
    <RouterProvider router={router} />
);
