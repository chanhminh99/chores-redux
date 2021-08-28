import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { tasksSlice } from "./taskSlice";

const createHuman = (name) => {
    return {
        id: nanoid(),
        name,
        taskIds: []
    }
}

const initialState = [
    createHuman('Chanh Chung'),
    createHuman('Haha')
]

export const humansSlice = createSlice({
    name: 'humans',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(createHuman(action.payload.name))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(tasksSlice.actions.assignToUser, (state, action) => {
            for (const human of state) {
                if (human.id === action.payload.humanId) {
                    human.taskIds.push(action.payload.taskId)
                }
                else {
                    human.taskIds = human.taskIds.filter((id) => id !== action.payload.taskId)
                }
            }
        })
    }
})