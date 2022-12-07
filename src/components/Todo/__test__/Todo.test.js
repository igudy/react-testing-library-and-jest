import {fireEvent, render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return(
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name: /Add/i});
    // For each is used to loop through the different tasks
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}});
        fireEvent.click(buttonElement);
    })
}


describe('Todo', () => {
    it('should render multiple times', async() => {
        render(<MockTodo />); 
        addTask(['Buy provision', 'Go home before 8:00AM', 'Watch football match']);
        const divElements = screen.getAllByTestId("task-container")
        expect(divElements.length).toBe(3);
    });
        // fireEvent.change(inputElement, {target: {value:"Go home before 8:00AM"}});
        // fireEvent.click(buttonElement);
        // fireEvent.change(inputElement, {target: {value:"Watch football match"}});
        // fireEvent.click(buttonElement);

        it('tasks should not have completed class when clicked', async() => {
            render(<MockTodo />); 
            addTask(['Buy provision'])
            const divElement = screen.getByText(/Buy provision/i);
            fireEvent.click(divElement);
            expect(divElement).toHaveClass('todo-item-active');
        });

        
        it('tasks should not have completed class when initally rendered', async() => {
            render(<MockTodo />); 
            addTask(['Buy provision']);
            const divElement = screen.getByText(/Buy Provision/i);
            fireEvent.click(divElement);
            expect(divElement).not.toHaveClass('todo-item-active');
        });
})