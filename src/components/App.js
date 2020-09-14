import React from 'react';
import AddToDo from '../containers/AddToDo';
import VisibleToDoList from './VisibleToDoList';
import Footer from './Footer';

const App = () => {
    return (
        <div>
           <AddToDo />
           <VisibleToDoList />
           <Footer />
        </div>
    )
}

export default App;