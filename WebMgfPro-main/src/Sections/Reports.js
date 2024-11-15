import React, { useCallback, useState } from 'react';

const Reports = () => {
  
 
    const[clickCount,setClickCount] = useState(0);
    const handleClick = useCallback(() => {
      setClickCount(clickCount+1);
     
        console.log("menu called",clickCount);
       
    },);

  return (
    <div>
      <h1>Reports</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Reports;
