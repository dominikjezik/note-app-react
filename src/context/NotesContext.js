import React, { useState, createContext } from 'react'
import { uuid } from 'uuidv4';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "Chocolate gingerbread gummies",
            body: "Tootsie roll pastry chupa chups lemon drops tart wafer biscuit danish. Carrot cake lollipop pastry jelly sweet roll. Oat cake gummi bears cheesecake sweet dessert cupcake. Candy caramels danish candy oat cake cheesecake chupa chups gummi bears. Bear claw fruitcake icing halvah candy canes gummies lemon drops cake.",
            created_at: new Date(),
            category: ""
        },
        {
            id: 2,
            title: "Gummies cheesecake chocolate bar",
            body: "Icing powder gummies pie sugar plum cake. Macaroon jelly dragée macaroon donut marzipan. Cupcake tiramisu wafer cookie. Halvah cake candy bonbon candy canes soufflé halvah marshmallow. Tiramisu pastry toffee bonbon cookie macaroon. Gummi bears icing gummies cotton candy gummi bears jelly. Liquorice macaroon powder chocolate cake sesame snaps sugar plum.",
            created_at: new Date(),
            category: ""
        }
    ])

    const [selectedNote, setSelectedNote] = useState({})
    const [editMode, setEditMode] = useState(false)

    const selectNote = (note) => {
        setSelectedNote(note)
        setEditMode(false)
    }

    const addEmptyNote = () => {
        const newNote = {
            id: uuid(),
            title: "untitled",
            body: "",
            created_at: new Date()
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

        modifiedNotes.unshift(note)

        setNotes(modifiedNotes)
        setEditMode(false)
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

