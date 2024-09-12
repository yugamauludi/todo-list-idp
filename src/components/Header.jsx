import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const Header = ({ handleSubmit, sortHandler }) => {
    let id = uuid();

    const [task, setTask] = useState({
        _id: id,
        title: '',
        status: false,
    });

    const handleChangeTask = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
            _id: id
        })
    }
    const submitHandler = () => {
        handleSubmit(task)
        setTask({
            _id: "",
            title: "",
            status: false,
        });
    }

    return(
        <div className="flex justify-between w-2/4">
            <div className="flex justify-between w-3/4">
                <input name="title" value={task.title} onChange={handleChangeTask} class="mr-2 shadow appearance-none border border-blue-500 rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium" id="listTodo" type="text" placeholder="Add list to do"/>
                <button onClick={submitHandler}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md px-4 py-2 w-32">Add Task</button>
                </div>
            <select onChange={(e) => sortHandler(e.target.value)}
             className="bg-gray-300 rounded-lg font-medium text-gray-600 px-4 py-2" >
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
            </select>
        </div>
    )
}

export default Header;
