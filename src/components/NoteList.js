import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NotesService from '../services/NotesService'



const NoteList = () => {

const[notes, setNotes] = useState([]);

useEffect (() => {

    NotesService.getAll()
    .then(response => {
        console.log('printing response', response.data);
        setNotes(response.data);
   
    })

    .catch(error => {
console.log('something went wrong', error);

    }, []);

}) 


  return (
    <div className='main-content'>
        <h4>List of Notes</h4>
    <div className='notes-list mt-4'>
    {

notes.length > 0 ?  notes.map (note => (
    <div key={note.id} className="notes-preview mt-3">
        <Link to="#">
                <h5 className='primary-color text-capitalize'>{note.title}</h5>
                <p>{note.body}</p>
        
        </Link>
    </div>
)): <div> No Notes is available</div>


}

        </div>
    </div>
  )
}

export default NoteList