import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const TodoInput = styled.input`
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
`;

const TodoListContainer = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 16px;
  padding: 0;
  width: 100%;
  max-width: 400px;
`;

const TodoItem = styled.li`
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoItemText = styled.span`
  margin-right: 10px;
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

const TodoItemButton = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  margin-left: 8px;
  border-radius: 5px;
  border: none;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  cursor: pointer;

  &:active {
    filter: brightness(70%);
  }
`;

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState("");

    const addTodo = (event) => {
        event.preventDefault();
        if (todoText.trim() === "") return;
        setTodos([...todos, { text: todoText, completed: false }]);
        setTodoText("");
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleCompleted = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        <Container>
            <Title>Todo List</Title>
            <form onSubmit={addTodo}>
                <TodoInput
                    type="text"
                    placeholder="Enter a todo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
            </form>

            <TodoListContainer>
                {todos.map((todo, index) => (
                    <TodoItem key={index}>
                        <TodoItemText completed={todo.completed}>
                            {todo.text}
                        </TodoItemText>
                        <div>
                            <TodoItemButton
                                bgColor="blue"
                                onClick={() => toggleCompleted(index)}
                            >
                                Toggle
                            </TodoItemButton>

                            <TodoItemButton
                                bgColor="red"
                                onClick={() => deleteTodo(index)}
                            >
                                Delete
                            </TodoItemButton>
                        </div>
                    </TodoItem>
                ))}
            </TodoListContainer>
        </Container>
    );
}

export default TodoList;
