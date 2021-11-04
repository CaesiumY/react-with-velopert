import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows="7"
          readOnly={true}
          value={JSON.stringify(data)}
        ></textarea>
      )}
    </div>
  );
};

export default App;
