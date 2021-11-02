import React, { useCallback, useRef, useState } from "react";
import produce from "immer";
import "./App.css";

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: false,
  });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;

    setForm(
      produce((draft) => {
        draft[name] = value;
      }) // produce에 return 값이 있어서는 안 되므로 라인 하나로 작성하면 안 됨. {}로 묶어서 return 값을 주지 않으면 됨
    );
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );

      setForm({
        name: "",
        username: "",
      });

      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback((id) => {
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
