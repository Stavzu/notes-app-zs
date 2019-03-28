import {GET_NOTES, GET_NOTE ,DELETE_NOTE , CLEAR_NOTE,  ADD_NOTE, CLEAR_NEW_NOTE, UPDATE_NOTE } from '../Actions'

export default function (state = {}, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                noteList: action.payload,
            }
        case GET_NOTE:
            return { 
                ...state, 
                note: action.payload,
            }
        case DELETE_NOTE:
            return {
                ...state,
                noteDeleted: action.payload
            }
        case CLEAR_NOTE:
            return {
                ...state,
                updateNote: action.payload.updateNote,
                note: action.payload.person,
                noteDeleted: action.payload.noteDeleted
            }
        case ADD_NOTE:
            return {
                ...state,
                newNote: action.payload
            }
        case CLEAR_NEW_NOTE:
            return {
                ...state,
                newNote: false
            }
        case UPDATE_NOTE:
            return {
                ...state,
                updateNote: true,
                note: action.payload, 
            }
        default:
            return state
    }
}



