import {createSlice} from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        {name: 'one', id: 'iasid'},
        {name: 'two', id: 'iasdfsid'},
        {name: 'three', id: 'iasssdgfgid'},
    ],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        editTask: (state, action) => {
            const fundedTaskIndyx = state.findIndex(task => task.id === action.payload.id);

            if (fundedTaskIndyx >= 0) {
                state[fundedTaskIndyx] = action.payload.task;
            }
        },
        removeTask: (state, action) => {
            state.splice(
                state.findIndex(task => task.id === action.payload.id),
                1,
            );
        },
    },
});

export const tasksActions = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
