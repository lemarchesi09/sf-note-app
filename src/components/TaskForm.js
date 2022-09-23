import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from '../features/tasks/tasksSlice'
import { v4 as uuidv4 } from 'uuid'
const TaskForm = () =>{
    // Task setted
    const [task, setTask] = useState(
        {
            title: "",
            description: "",
        }
    )
    // Calling dispatch
    const dispatch = useDispatch();

    // Handler for submit button
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Submit Click');
        dispatch(
            addTask({
                ...task,
                id: uuidv4()
            })
        )
        
    }
    // Handler for change event
    const handleChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setTask(
            {
                ...task,
                [e.target.name]: e.target.value
            }
        )
    }

 
    console.log('task', task);
    return (
        <form onSubmit={handleSubmit}>
            <label>Task</label>
            <input 
                type="text"
                name="title"
                placeholder="Title for your Task"
                onChange={handleChange}
                value={task.title}
            />
            <label>Description</label>
            <textarea 
                name="description"
                placeholder="Description of your Task"
                onChange={handleChange}
                value={task.description}
                />
                <button type="submit">Send</button>
        </form>
    )
}

export default TaskForm;