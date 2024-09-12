import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import './App.css';

function App() {
    const todos = [
      {
        _id : 1,
        title : "Translate home page",
        status : false
      },
      {
        _id : 2,
        title : "Assign task to coworkers",
        status : false
      },
      {
        _id : 3,
        title : "Learning angular from udemy",
        status : true
      },
      {
        _id : 4,
        title : "Learning C++",
        status : false
      },
      {
        _id : 5,
        title : "Daily standup meeting",
        status : true
      },
    ];

    const [listTask, setListTask] = useState(todos);
    const [showListTask, setShowListTask] = useState([]);
    const [sort, setSort] = useState('All');

    const submitTask = (task) => {
      setListTask([
        ...listTask,
        {
          ...task
        }
      ])
    }

    const deleteTask = (_id) => {
      setListTask(
        listTask.filter(t => t._id !== _id)
      );
    }

    const checkTask = (task) => {
      setListTask(
        listTask.map(t => {
          if(t._id === task._id) {
            let checkedTask = {
              ...task,
              status : !task.status,
            }
            console.log("checked Task: ", checkedTask)
            return checkedTask
          } else {
            return t;
          }
        })
      )
    }
    
    const sortList = (opt) => {
      setSort(opt);
    }
  
    useEffect(() => {
      if( sort === 'All') {
          setShowListTask(
            listTask
          )
      } else if ( sort === 'Incomplete') {
          let sortedListTasks = listTask.filter( t =>  !t.status  );
          setShowListTask(
            sortedListTasks
          )
      } else {
          let sortedListTasks = listTask.filter( t => t.status  );
          setShowListTask(
            sortedListTasks
          )
      }
    },[listTask, sort])
  return (
    <div className="flex flex-col items-center w-full h-full bg-white my-10 gap-6">
      <h1 className="text-4xl font-bold uppercase text-gray-600">ToDo List</h1>
      <Header 
        handleSubmit={submitTask}
        sortHandler={sortList}
      />
      <Todos 
        tasks={showListTask}
        deleteHandler={deleteTask}
        checkHandler={checkTask}
      />
    </div>
  );
}

export default App;
