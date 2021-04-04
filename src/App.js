import { useContext, useLayoutEffect, useState } from 'react'
import './App.scss';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { NotesContext } from './context/NotesContext'

function App() {
    const { width } = useWindowSize()
    const { selectedNote } = useContext(NotesContext)
    let classes = "container"

    if(width < 1000) {
        classes += " mobile-mode"

        if(selectedNote.id)
            classes += " note-full-screen"
    }

    return (
        <div className={classes}>
            <Sidebar />
            <Main />
        </div>
    );
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize({width: window.innerWidth, height: window.innerHeight});
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default App;
