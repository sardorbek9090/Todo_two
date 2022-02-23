import React, { useState } from "react";

function TodoList() {
  const [nameInput, updateNameInput] = useState("");
  const [todoList, updateTodoList] = useState([]);
  const [sum, setSum] = useState();

  const addItem = () => {
    todoList.push({ description: nameInput });
    updateTodoList(todoList);
    updateNameInput("");
  };

  const deleteItem = (index) => {
    const newList = todoList.filter((item, i) => i !== index);
    updateTodoList(newList);
  };

  const markComplate = (index) => {
    const list = [...todoList];
    list[index].isComplete = !list[index].isComplete;
    updateTodoList(list);
  };

  function jami() {
    let sum = hisobArray.reduce((total, value) => total + value);
    setSum(sum);
  }

  return (
    <div className="container-fluid">
      <p className="logo">Todo List</p>
      <div className="container">
        <div className="row">
          <div className="col ofset">
            <input
              type="text"
              className="form-control"
              value={nameInput}
              onChange={(e) => updateNameInput(e.target.value)}
            />
            <button className="btn btn-success" onClick={addItem}>
              Add
            </button>
          </div>
        </div>
        <div className="row">
          {todoList?.length ? (
            todoList.map((todoItem, index) => (
              <TodoItem
                deleteItem={deleteItem}
                index={index}
                todoDate={todoItem}
                markComplate={markComplate}
              />
            ))
          ) : (
            <p>Malumot yoq</p>
          )}
        </div>
        <div className="row">
          {!hisobArray ? (
            <></>
          ) : (
            <>
              <button onClick={() => jami()} className="jami">
                Jami
              </button>
              <span className="list-item">Jami: {sum}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const hisobArray = [];
function TodoItem(props, index) {
  const [narx, setNarx] = useState(0);
  const [kg, setKg] = useState(0);

  const hisobla = () => {
    hisobArray.push(narx * kg);
    setKg(0);
    setNarx(0);
    console.log(hisobArray);
  };
  console.log(hisobArray);

  return (
    <>
      <div className="tab" key={index}>
        <span
          className={props.todoDate.isComplete ? "completemark" : ""}
          onClick={() => props.markComplate(props.index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-lg"
            viewBox="0 0 16 16"
          >
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
          {props.todoDate.description}
        </span>
        <input
          type="text"
          placeholder="Narx"
          value={narx}
          onChange={(e) => setNarx(e.target.value)}
        />
        <input
          type="text"
          placeholder="kg"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
        />
        <button onClick={() => hisobla()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bootstrap-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
          </svg>
        </button>
        <button onClick={() => props.deleteItem(props.index)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default TodoList;
