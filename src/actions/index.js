import axios from 'axios'
import { URL } from '../helpers'

export const GET_NOTES = 'GET_NOTES'
export const GET_NOTE = 'GET_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const ADD_NOTE = 'ADD_NOTE'
export const CLEAR_NOTE = 'CLEAR_NOTE'
export const CLEAR_NEW_NOTE = 'CLEAR_NEW_NOTE'


export function getNotes() {
    const request = axios.get(`${URL}/notes`)
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });

        return { 
            type: 'GET_NOTES',
            payload: request
        }
    }


export function getNote(id) {
    const request = axios.get(`${URL}/notes/${id}`)
        .then(response => response.data)
        .catch(error => {
            if (error.response) {
              console.log(error.response);
            }
          });

    return {
        type: 'GET_NOTE',
        payload: request
    }
}


export function updateNote(id, data) {
    const request = axios.put(`${URL}/notes/${id}`, data)
        .then(response => response.data )
        .catch(error => {
            if (error.response) {
              console.log(error.response);
            }
          });

        return {
            type: 'UPDATE_NOTE',
            payload: request
        }
}


export function deleteNote(id){
    const request = axios.delete(`${URL}/notes/${id}`)
            .then(response => response.data)
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                }
                });

    return {
        type:'DELETE_NOTE',
        payload:request
    }
}

 export function clearNote(){
    return{
        type:'CLEAR_NOTE',
        payload:{
            note: null,
            updateNote:false,
            noteDeleted:false
         }
    }
} 

export function clearNewNote() {
    return {
        type: 'CLEAR_NEW_NOTE',
        payload: {}
    }
}


export function addNote(note) {
    const request = axios.post(`${URL}/notes`, note)
    .then(response => response.data)
    .catch(error => {
        if (error.response) {
          console.log(error.response);
        }
      });

    return {
        type: 'ADD_NOTE',
        payload: request
    }
}






// prepared for loading notes in page

/* export function getNotesAll(
    order = 'asc', // ascending
    notelist = ''
) {
    const request = axios.get(`${URL}/notes?order=${order}`)
        .then(response => {
            if (notelist) {
                return [...notelist, ...response.data]
            } else {
                return response.data
            }
        })

    return {
        type: 'GET_NOTES_ALL',
        payload: request
    }
} */

