import {createAction, createSlice} from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const createTask = (title) => {
    return {
        id: nanoid(),
        title,
        completed: false,
        assignedTo: ''
    }
}

const initialState = [
    createTask('Cleaning house'),
    createTask('Washing cloth')
]

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action) => {
            const task = createTask(action.payload.title);
            state.push(task);
        },
        toggle: (state, action) => {
            const task = state.find(task => task.id === action.payload.taskId)
            task.completed = action.payload.completed
        },
        assignToUser: (state, action) => {
            const task = state.find(task => task.id === action.payload.taskId)
            task.assignedTo = action.payload.humanId
        }
    }
});

export const toggleTask = createAction('tasks/toggle', (taskId, completed) => ({payload: {taskId, completed}}))