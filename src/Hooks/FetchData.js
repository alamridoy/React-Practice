import React, { useEffect, useState } from 'react';

const LoadingMessage = <p>Todos are loading...</p>;

const FetchData = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("Fetching data was not successful");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const todosElement = todos && todos.map((todo) => {
    return <p key={todo.id}>{todo.title}</p>;
  });

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && LoadingMessage}
      {error && <p>{error}</p>}
      {todosElement}
    </div>
  );
};

export default FetchData;
