import React from "react";

const TodoUI = ({ value, valueHandler, addTodoHandler, todos, handleSubmit, deleteHandler, searchHandler, searchterm }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">To-Do App</h1>

      {/* Card Container */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        {/* Search Bar */}
        <input
          type="text"
          value={searchterm}
          onChange={searchHandler}
          placeholder="Search tasks..."
          className="w-full border rounded-lg p-2 mb-4 outline-none"
        />

        {/* Add Task Form */}
        <form onSubmit={handleSubmit} className="flex mb-4">
          <input
            value={value}
            onChange={valueHandler}
            type="text"
            placeholder="Add a new task..."
            className="flex-grow border rounded-l-lg p-2 outline-none"
          />
          <button
            onClick={addTodoHandler}
            type="submit"
            className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <ul className="space-y-2">
          {
          todos.length > 0 ? (todos.map((item) => (
            <li key={item.id} className="flex justify-between items-center border rounded-lg p-2">
              <span className="text-gray-700">{item.todoname}</span>
              <div className="space-x-2">
                <button className="text-blue-600 font-medium">Edit</button>
                <button className="text-red-600 font-medium" onClick={() => deleteHandler(item.id)}>Delete</button>
              </div>
            </li>
            ))) : (
                <p className="text-gray-500 text-center py-4">No tasks found</p>
            )
          }

          {/* <li className="flex justify-between items-center border rounded-lg p-2">
            <input
              type="text"
              value="Editing Task"
              className="flex-grow border rounded p-1 mr-2 outline-none"
              readOnly
            />
            <button className="text-green-600 font-medium">Save</button>
          </li> */}

          
        </ul>
      </div>
    </div>
  );
};

export default TodoUI;
