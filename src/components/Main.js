import { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'
import Note from './Note';
import EditNote from './EditNote'

function Main() {
    const { editMode } = useContext(NotesContext)

    return (
        <main>
            { editMode ?
                <EditNote /> :
                <Note />
            }
        </main>
    )
}

export default Main
