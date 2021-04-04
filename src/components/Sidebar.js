import React, { useContext } from 'react'
import NotesList from './NotesList'
import { NotesContext } from '../context/NotesContext'

function Sidebar() {

    const { addEmptyNote } = useContext(NotesContext)

    
    return (
        <aside className="main-side-bar">
            <div className="header">
                <h1>My Notes</h1>
            </div>
            <NotesList />
            <div className="center">
                <button className="btn-primary" onClick={addEmptyNote}>+ Create new note</button>
            </div>
        </aside>
    )
}

export default Sidebar
