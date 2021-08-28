import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

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
    }
})