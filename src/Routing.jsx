import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Routes,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";

const Page1 = () => {
    return <div>Page 1</div>
}

const Page2 = () => {
    return <div>Page 2</div>
}

export const Routing = () => {

    const navigate = useNavigate();

    const params = useParams();

    console.log({params})

    const [searchParams, setParams] = useSearchParams();

    const modal = searchParams.getAll(); // show | hide

    const handleNavigate = (event) => {
        navigate(event.target.name);
    }
    
    return <div>
        <h4>Hi routing!</h4>
        {params?.page === 'page-1' && <Page1 />}
        {params?.page === 'page-2' && <Page2 />}
        <button name="/page-1" onClick={handleNavigate}>page 1</button>
        <button name="/page-2" onClick={handleNavigate}>page 2</button>
        {modal === 'show' && <div>show modal</div>}
    </div>
}
