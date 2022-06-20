import React, { useState } from "react";
import Counter from "./Counter";

export default function Counting() {
  const [count, setCount] = useState([]);

  const handleAdd = () => {
    const newCount = [...count,0];
    setCount(newCount);
  };

  const handleClear = () => {
    setCount([]);
  };

  const handleDelete = (delet) => {
    const filterArr = count.filter((item, Index) => delet !== Index);
    setCount(filterArr);
  };

  const handleClick = (idx, type) => {
    const newCount = [...count];
    console.log();
    if (type === "Increment") {
      newCount[idx] = newCount[idx] + 1;
     
    }
    if (type === "Decrement") {
      newCount[idx] = newCount[idx] - 1;
    }
    if (type === "Reset") {
      newCount[idx] = 0;
    }
    setCount(newCount);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="my-4">
            <button
              className="btn btn-primary mx-3"
              onClick={() => handleAdd("Add")}
            >
              Add
            </button>
            <button className="btn btn-dark" onClick={handleClear}>
              clear
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {count.length > 0 ? (
          count.map((item, idx) => {
            return (
              <Counter
                key={idx}
                count={item}
                index={idx}
                handleDelete={handleDelete}
                handleClick={handleClick}
              />
            );
          })
        ) : (
          <div className="col-md-12">
            <div className="alert alert-danger m-2 w-25" role="alert">
              This is a danger alert—check it out!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
