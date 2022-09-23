import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from '../features/tasks/tasksSlice'
const TaskList = () =>{
    // Devuelve todo lo que se encuentre en reducer de store.js
    const state = useSelector((state) => state)
    // Devuelve un reducer especifico dentro del reducer de store.js
    const tasks = useSelector((state) => state.tasks)
    console.log('state in TaskList', state);
    console.log('tasks in TaskList', tasks);

    const dispatch = useDispatch();
       // Handler for delete Task
       const handleDelete = (id) =>{
        dispatch(
            deleteTask(id),
        )
    }
    return (
        <>
            <h1> TaskList</h1>
           
            {tasks.map((task) => {
                return (
                    <div key={task.id}>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <button onClick={() => {handleDelete(task.id)}}>Delete Task</button>
                    </div>
                )
            })}
           
        </>

    )
}

export default TaskList;