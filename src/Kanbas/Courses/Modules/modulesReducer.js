import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modules: [],
    module: { name: "New Module 123", description: "New Description" },
};


const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },
        addModule: (state, action) => {
            state.modules = [
                action.payload,
                ...state.modules,
            ];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module) => 
                module._id === action.payload._id ? action.payload : module)
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
    },
});


export const { setModules, addModule, deleteModule,
    updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;
