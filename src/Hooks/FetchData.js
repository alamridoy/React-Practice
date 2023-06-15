
import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {todos && todos.map((todo)=>{
          return  <p>{todo.title}</p>
        })
      }
    </div>
  );
};

export default FetchData;
