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

const store = {
    mode: '',
    id: ''
};

const types = ['edit', 'view'];

const list = [
    {id: 'yyy'},
    {id: 'iii'},
    {id: 'ooo'},
];

export const Routing = () => {

    const navigate = useNavigate();

    const params = useParams();

    const [searchParams, setParams] = useSearchParams();

    const modal = searchParams.get('modal'); // show | hide
    const id = searchParams.get('id'); // show | hide

    const isValidId = () => {
        return list.some(task => task.id === id);
    };

    const isShow = (() => {
        if (modal === 'create') {
            return true;
        }

        if (types.some(t => t === modal) && isValidId()) {
            return true;
        }

        return false;
    })();

    const handleNavigate = (event) => {
        navigate(event.target.name);
    }

    if (!isShow) {
        return null;
    }

    return <div>
        <h4>Hi routing!</h4>

        {isShow && (<div>
            <div>Modal: {modal}</div>
            <div>Id: {id}</div>
        </div>)}

    </div>
}
