import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    assignments: [],
    assignment: {
        title: "New assignment 123",
        discription: "New Description",
        dueDate: "2020-12-31",
        avaiableFrom: "2020-12-01",
        avaiableTo: "2020-12-31",
        availableUntil: "2023-12-31"
    },
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => 
                assignment._id === action.payload._id ? action.payload : assignment)
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        reset: (state) => {
            state.assignment = initialState.assignment;
        },
    },
});


export const { setAssignments, addAssignment, deleteAssignment,
    updateAssignment, setAssignment, reset } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
