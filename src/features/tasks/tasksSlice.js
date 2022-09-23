import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "todo1",
        description: "description1"
    },
    {
        id: "2",
        title: "todo2",
        description: "description2"
    },
    {
        id: "3",
        title: "todo3",
        description: "description3"
    }
]

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers :{
        addTask: (state, action) =>{
            console.log('state de addTask',state);
            console.log('action de addTask',action);
            // Accion literal de addTask
            // Pushea los datos(payload) que se encuentran al momento de usar addTask al initialState (state)
            state.push(action.payload)
        },
        // deleteTask
        deleteTask: (state, action) =>{
            // Filtrar el array para encontrar todo lo que no coincida con el id requerido
            const newState = state.filter((task) => task.id !== action.payload)
            console.log('deleteTask', action.payload);
            // Devolver el nuevo array
            return newState
        }
        // updateTask
    },
})

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;