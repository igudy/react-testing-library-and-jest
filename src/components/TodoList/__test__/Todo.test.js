import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return(
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

it('should render the amount of incomplete tasks', async() => {
    render(
    );
});
