import {configureStore} from '@reduxjs/toolkit';
import {tasksReducer} from './tasksStore';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});
