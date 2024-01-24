import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { notify } from "../helper/sweetAlert";

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const url: string = import.meta.env.VITE_BASE_URL;

  const getTodos = async () => {
    try {
      const { data } = await axios<TodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //! ADD TODO
  const addTodo: AddFn = async (text) => {
    try {
      await axios.post(url, { todo: text, isDone: false });
      notify("The todo was created successfully", "success");
    } catch (error) {
      console.log(error);
      notify("The todo was not created successfully", "error");
    } finally {
      getTodos();
    }
  };

  //! TOGGLE TODO
  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
      notify("The todo was updated successfully", "success");
    } catch (error) {
      console.log(error);
      notify("The todo was not updated successfully", "error");
    } finally {
      getTodos();
    }
  };

  // ! DELETE TODO
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      notify("The todo was deleted successfully", "success");
    } catch (error) {
      console.log(error);
      notify("The todo was not deleted successfully", "error");
    } finally {
      getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography variant="h2" color="red" component={"h1"} align="center">
        Todo App with Typescript
      </Typography>
      <AddTodoComp addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </Container>
  );
};

export default Home;
