import { combineReducers } from 'redux'
import notes from './NotesReducer'

const rootReducer = combineReducers({
    notes
})

export default rootReducer