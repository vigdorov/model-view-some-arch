import React from "react";
import { createRoot } from "react-dom/client";

import { FormFunc } from "./FormFunc";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Counter /> */}
    <FormFunc />
  </>
);
