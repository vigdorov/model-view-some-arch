import React, {useState} from 'react';

export const FilterFinder = () => {
    const tasks = [
        {
            name: 'Ivan',
            sex: 'male',
        },
        {
            name: 'Fedor',
            sex: 'male',
        },
        {
            name: 'Vasiliy',
            sex: 'male',
        },
        {
            name: 'Nikloay',
            sex: 'male',
        },
        {
            name: 'Mikhail',
            sex: 'male',
        },
        {
            name: 'Nastya',
            sex: 'female',
        },
        {
            name: 'Natasha',
            sex: 'female',
        },
        {
            name: 'Katya',
            sex: 'female',
        },
    ];

    const [search, setSearch] = useState('');

    const [filterSex, setFilterSex] = useState();

    const filteredTasks = filterSex ? tasks.filter(task => task.sex === filterSex) : tasks;

    const searchedTasks = filteredTasks.filter(task => task.name.toLowerCase().includes(search.toLowerCase()));

    const handleChange = event => {
        setSearch(event.currentTarget.value);
    };

    const handleSetMaleFilter = () => {
        setFilterSex('male');
    };

    const handleSetFemaleFilter = () => {
        setFilterSex('female');
    };

    const handleDropSexFilter = () => {
        setFilterSex(undefined);
    };

    return (
        <div>
            <div>
                <label>Search</label>
                <input value={search} onChange={handleChange} />
            </div>

            <button style={{backgroundColor: filterSex === 'male' ? 'grey' : undefined}} onClick={handleSetMaleFilter}>
                male
            </button>
            <button
                style={{backgroundColor: filterSex === 'female' ? 'grey' : undefined}}
                onClick={handleSetFemaleFilter}
            >
                female
            </button>
            <button onClick={handleDropSexFilter}>X</button>

            <p>
                <b>List:</b>
            </p>
            {searchedTasks.map(task => {
                return (
                    <div key={task.name}>
                        Name: {task.name}, sex: {task.sex}
                    </div>
                );
            })}
        </div>
    );
};
