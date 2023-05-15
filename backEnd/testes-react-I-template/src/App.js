import { useState } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
    const [activeComponent, setActiveComponent] = useState("counter")

    return (
        <>
            <Header
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
            />

            <hr />

            {activeComponent === "counter" && <Counter />}
            {activeComponent === "todolist" && <TodoList />}
        </>
    );
}

export default App;
