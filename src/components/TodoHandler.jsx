import { useState, useEffect } from "react";
import TodoUi from "./TodoUi";
import { ToastContainer, toast } from "react-toastify";

const TodoHandler = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const [searchterm, setSearchTerm] = useState("");


 const addSuccess = () => toast.success("Todo added successfully!");
 const error = () => toast.error("Please enter a todo");
 const deleteTodo = () => toast.info("Todo deleted successfully");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function valueHandler(e) {
    setValue(e.target.value);
  }


  //Add Todo

  function addTodoHandler() {
    if (!value.trim()) {
      error();
      return;
    }
    setTodos((prev) => [{ id: Date.now(), todoname: value }, ...prev]);
    setValue("");
    addSuccess();

    
  }

  //Delete Todo

  function deleteHandler(id){
    const confirmDelete = window.confirm("Are you sure you want to delete this todo?")
    if(confirmDelete){
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
        deleteTodo();
    }
    
  }
  
  //Search Todo

  function searchHandler(e){
    setSearchTerm(e.target.value);
  }
  const filteredTodos = todos.filter(todo => todo.todoname.toLowerCase().includes(searchterm.toLowerCase()));
  


  









  //To show the data from the local storage on first render

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("my_todos"));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []);

  //To save the data to local storage
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("my_todos", JSON.stringify(todos));

    }
  }, [todos]);

  return (
    <div>
      <TodoUi
        value={value}
        valueHandler={valueHandler}
        addTodoHandler={addTodoHandler}
        todos={filteredTodos}
        handleSubmit={handleSubmit}
        deleteHandler = {deleteHandler}
        searchHandler = {searchHandler}
        searchterm = {searchterm}

      />
      <ToastContainer />
    </div>
  );
};

export default TodoHandler;
