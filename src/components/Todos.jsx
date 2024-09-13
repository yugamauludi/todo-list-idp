import Task from './TodoItem';

const Tasks = ({ tasks, deleteHandler, checkHandler, deleteAllHandler }) => {

    return(
        <div className="flex flex-col items-center rounded-lg bg-gray-100 w-2/4 p-5 ">
            { tasks.length > 0 ? ( 
                <>
                    <div className='flex items-center justify-between w-full'>
                        <div className="flex flex-col items-center w-2/5 bg-gray-300 font-medium rounded p-2 mb-3">
                            Unfinished Task: {tasks.filter(task => !task.status).length}
                        </div>
                        <button className='ml-auto bg-red-500 text-white rounded p-2 mb-3' onClick={deleteAllHandler}>
                            Delete All Tasks
                        </button>
                    </div>

                    
                    {tasks.map( (task, i) => (
                        <Task key={i}
                        task={task}
                        deleteHandler={deleteHandler}
                        checkHandler={checkHandler}
                        />
                    ))}
                </>
                ) : (
                    <div className="flex flex-col items-center w-2/5 bg-gray-300 font-medium rounded p-2">
                        No Todo Found!
                    </div>
                )
            }
        </div>
    )
}

export default Tasks;