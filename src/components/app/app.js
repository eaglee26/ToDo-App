import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('drink coffee'),
            this.createTodoItem('drink beer'),
            this.createTodoItem('drink cidr')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }

    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx + 1)
            ];

            return{
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        //generate id
        const newItem = this.createTodoItem(text);
        //add element in array
        this.setState(({todoData}) => {
            //  todoData.push(newItem);

             const newArr = [
                 ...todoData,
                 newItem
             ];

             return {
                 todoData: newArr
             };
        });

        console.log('added', text);
    };

    onToggleImportant = (id) => {
        console.log('onToggleImportant', id);
        
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            //1. update object
            const oldItem = todoData[idx];
            const newItem = {...oldItem, doneFunc: !oldItem.doneFunc};

            //2. construct new array
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    render(){

        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.doneFunc).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
    
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm addItem={this.addItem} />
            </div>
        );
    }
};