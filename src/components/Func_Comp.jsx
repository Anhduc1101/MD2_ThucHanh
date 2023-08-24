import React from 'react'

export default function Func_Comp() {
    // const a=3;
    // const b = 4; 
    const sum = (a, b) => {
        return a+b;
    }
  return (
    //   <div>
    //       <h1>DANH SÁCH KHÓA HỌC</h1>
    //       <ul>
    //         <li>HTML</li>
    //         <li>Javascrip</li>
    //         <li>Python</li>
    //         <li>C++</li>
    //       </ul>
    //   </div>
    //   <h1>Tổng của {a} và {b} là: {a + b}</h1>
      <div>Tổng của 3 và 4 là {sum(3,4)}</div>
  )
}
