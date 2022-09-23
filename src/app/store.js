import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from "../features/tasks/tasksSlice"
import productsReducer from "../features/products/productsSlice"

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    products: productsReducer,

  },
})

