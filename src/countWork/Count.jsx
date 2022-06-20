import React, { useState } from 'react'

export default function Count() {
  const [arr, setArry] = useState([2, 3, 4, 5, 6, 6]);
  return (
    <div>
      {
        arr.map((item,idx,p) => {
          return <div key={idx}>{arr[idx]}</div>
        })
      }

      {/* <div>2</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>6</div> */}
      {/* {
      arr.map((item,idx) => {
        return (
        <div key={idx} >{item}
        </div>
        )
        
      })
      } */}

    </div>
  )
}


