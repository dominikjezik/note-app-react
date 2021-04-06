import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorkerRegistration';
import { NotesProvider } from './context/NotesContext'

ReactDOM.render(
    <React.StrictMode>
        <NotesProvider>
            <App />
        </NotesProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.register();