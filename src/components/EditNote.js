import { useState, useContext } from 'react'
import { NotesContext } from '../context/NotesContext'
import Categories from './Categories'

function EditNote() {
    const { selectedNote, saveNote, deleteNote } = useContext(NotesContext)


    const [title, setTitle] = useState(selectedNote.title)
    const [body, setBody] = useState(selectedNote.body)
    const [selectedCategory, setSelectedCategory] = useState(selectedNote.category)

    const submitForm = e => {
        e.preventDefault()
        saveNote({ id: selectedNote.id, title, body, category: selectedCategory })
    }

    return (
        <form className="edit-note" onSubmit={ e => submitForm(e) }>
            <div className="row">
                <input 
                    type="text" 
                    className="title" 
                    placeholder="Title" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    autoFocus 
                />
                <button className="btn-option" onClick={ () => deleteNote(selectedNote.id) }>
                    <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/><path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/></g></svg>
                </button>
                <button type="submit" className="btn-option">
                    <svg x="0px" y="0px" width="448.8px" height="448.8px" viewBox="0 0 448.8 448.8">
                        <g id="check">
                            <polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55"/>
                        </g>
                    </svg>
                </button>
            </div>
            <Categories selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
            <textarea 
                className="body" 
                placeholder="Body" 
                rows="10" 
                value={body} 
                onChange={e => setBody(e.target.value)} 
            />
        </form>
    )
}

export default EditNote