import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";

const App = () => {

    const todoData = [
        {label: 'lox', important: false, id: 1},
        {label: 'pidar', important: true, id: 2},
        {label: 'xylio', important: false, id: 3},
    ];

    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
