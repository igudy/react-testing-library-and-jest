import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return(
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

describe("Todofooter", () => {
    describe("Functionality 1", () => {
        // Tasks Left
        it('should render the amount of incomplete tasks', async() => {
            render(
                <MockTodoFooter
                    numberOfIncompleteTasks={5}
                />
            );
            const paragraphElements = screen.getByText(/5 tasks left/i);
            expect(paragraphElements).toBeInTheDocument();
        });
    })

    describe("Functionality 2", () => {
        // 1 task
        it('should render "task" when the number of incomplete task is one', async() => {
            render(
                <MockTodoFooter
                    numberOfIncompleteTasks={1}
                />
            );
            const paragraphElements = screen.getByText(/1 task left/i);
            expect(paragraphElements).toBeInTheDocument();
        })
    })
})