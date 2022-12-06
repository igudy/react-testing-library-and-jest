// import { render, screen, fireEvent } from "@testing-library/react";
// import AddInput from "../AddInput";

// const mockedSetTodo = jest.fn();

// describe("AddInput", () => {
//   it("should render input element", async () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
//     expect(inputElement).toBeInTheDocument();
//   });
// });


// describe("AddInput", () => {
//   it("Should be able to type in input and expect result", async() => {
//     render(
//       <AddInput todo={[]} setTodos={mockedSetTodo} />
//     );
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     const buttonElement = screen.getByRole("button", {name: /Add/i})
//     fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}})
//     fireEvent.click(buttonElement)
//     expect(inputElement.value).toBe("");
//   });
// })

