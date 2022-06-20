import React from "react";

export default function Counter({count, index , handleDelete,  handleClick}) {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <span>#{index + 1}</span>
          <span className="float-end">
            <span className="btn-close" onClick={()=>handleDelete(index)}></span>
          </span>
        </div>
        <div className="card-body">
        <span
            className={`badge bg-${
              count === 0 ? "danger" : count > 0 ? "success" : "warning"
            }`}
          >
            {count}
          </span>
          <div>
            <button
              className="btn btn-primary mx-2"
              onClick={()=>handleClick(index , "Decrement")}
            >
              Decrement
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={()=>handleClick(index , "Reset")}
            >
              Reset
            </button>
            <button
              className=" btn btn-primary mx-2"
              onClick={()=>handleClick(index , "Increment")}
            >
              Increment
            </button>
        </div>
      </div>
    </div>
    </div>
  );
}
