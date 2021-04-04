import React from 'react'
import moment from 'moment'

function NoteItem({ note, selectNote, selectedNote }) {
    return (
        <li onClick={() => selectNote(note)} className={note.id === selectedNote.id ? "selected" : undefined}>
            <div className="row">
                <div className="title">{ getPreviewOfText(note.title, 33) }</div>
                { (note.category !== "" && note.category !== undefined) ? (
                    <div className={`category category-${note.category}`}></div>
                ): null}
                
            </div>
            <div className="row">
                <span className="body-preview">{ getPreviewOfText(note.body) }</span>
                <span className="date">{ moment(note.created_at).fromNow() }</span>
            </div>
        </li>
    )
}

function getPreviewOfText(text, size = 25) {
    const output = text.substring(0, size)
    return output.length === text.length ? text : output + "..."
}

export default NoteItem
