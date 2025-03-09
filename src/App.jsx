import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Routes} from 'react-router-dom';
import {Videos} from './Videos';
import {Video} from './Video';

import {Breakpoints} from './Breakpoints';
import {ApiRoot} from './api/ApiComponent';

const root = createRoot(document.getElementById('root'));

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="videos" element={<Videos />}></Route>
//     </Route>
//   )
// );

root.render(<ApiRoot />);
