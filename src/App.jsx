import React from "react";
import {createRoot} from "react-dom/client";

// import {FormFunc} from "./FormFunc";
import { CalculatorNew} from './CalculatorNew';
import {CalculatorFunc} from './CalculatorFunc';

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        {/* <Counter /> */}
        {/* <FormFunc /> */}
        <CalculatorNew />
        <CalculatorFunc />
    </>
);
