import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const dataFetchFromApi = async () => {
      const api = await fetch(`https://jsonplaceholder.typicode.com/${name}`);
      const data = await api.json();
      console.log(data);
      setJsonData(data);
    };

    if (name) {
      dataFetchFromApi();
    }
  }, [name]);

  useEffect(() => {
    document.title = `Counter Value = ${counter}`;
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      <button onClick={() => setName("posts")}>POSTS</button>
      <button onClick={() => setName("albums")}>Albums</button>
      <button onClick={() => setName("photos")}>Photos</button>
      <button onClick={() => setName("todos")}>Todos</button>
      <button onClick={() => setName("users")}>Users</button>

      {jsonData.map((data) => (
        <div key={data.id}>
          <h1>
            {data.id} - {data.title || data.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default UseEffect;
