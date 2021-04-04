import React, { useContext } from 'react'
import NoteItem from './NoteItem'
import { NotesContext } from '../context/NotesContext'

function NotesList() {
    const { notes, selectedNote, selectNote } = useContext(NotesContext)


    return (
        <ul>
            { notes.map(note => (
                <NoteItem key={note.id} note={note} selectNote={selectNote} selectedNote={selectedNote} />
            )) }
        </ul>
    )
}

export default NotesList
