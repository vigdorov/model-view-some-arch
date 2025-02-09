import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {tasksActions} from './tasksStore';

export const App = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(
            tasksActions.addTask({
                name: 'asdjdjdjdj',
                id: (Math.random() * 1000).toString(),
            }),
        );
    };

    const handleEditTask = (id, editedTask) => {
        dispatch(
            tasksActions.editTask({
                id,
                task: editedTask,
            })
        )
    }

    const handleRemoveTask = (id) => {
        dispatch(
            tasksActions.removeTask({
                id,
            })
        )
    }

    return (
        <div>
            <div>REDUX</div>
            <div>Tasks</div>
            {tasks.map(task => (
                <p style={{border: '1px solid black'}}>{task.name}
                    <button type="button" onClick={() => handleEditTask(task.id, {...task, name: 'edit success'})}>Edit</button>
                    <button type="button" onClick={() => handleRemoveTask(task.id)}>Remove</button>
                </p>
            ))}

            <button type="button" onClick={handleAddTask}>Add task</button>
        </div>
    );
};
