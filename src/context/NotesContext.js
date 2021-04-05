import React, { useState, createContext, useEffect } from 'react'
import { uuid } from 'uuidv4';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([])

    const [selectedNote, setSelectedNote] = useState({})
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        const notes = fetchNotesFromLocalStorage()
        setNotes(notes)
    }, [])

    useEffect(() => {
        updateNotesInLocalStorage()
    }, [notes])

    const fetchNotesFromLocalStorage = () => {
        let notes = window.localStorage.getItem('notes');
        notes = JSON.parse(notes)
        return notes === null ? [] : notes
    }

    const updateNotesInLocalStorage = () => {
        let json = JSON.stringify(notes)
        window.localStorage.setItem('notes', json)
    }

    const selectNote = (note) => {
        setSelectedNote(note)
        setEditMode(false)
    }

    const addEmptyNote = () => {
        const newNote = {
            id: uuid(),
            title: "untitled",
            body: "",
            updated_at: new Date()
        }

        const modifiedNotes = notes
        modifiedNotes.unshift(newNote)
        setNotes(modifiedNotes)

        setSelectedNote(newNote)
        setEditMode(true)
    }

    const saveNote = ({ id, title, body, category }) => {
        const modifiedNotes = notes.filter(iNote => iNote.id !== id)

        const note = notes.filter(iNote => iNote.id === id)[0]
        note.title = title
        note.body = body
        note.category = category
        note.updated_at =  new Date()

        modifiedNotes.unshift(note)

        setNotes(modifiedNotes)
        setEditMode(false)
        updateNotesInLocalStorage()
    }

    const deleteNote = (id) => {
        const modifiedNotes = notes.filter(iNote => iNote.id !== id)
        setNotes(modifiedNotes)
        setEditMode(false)
        setSelectedNote({})
    }

    return (
        <NotesContext.Provider value={{notes, selectedNote, setSelectedNote, editMode, setEditMode, selectNote, addEmptyNote, saveNote, deleteNote}}>
            { children }
        </NotesContext.Provider>
    )
}

