import React, { useState, useEffect } from "react";

const Plusday = ({year, month, date}) => {
  const [inputValue, setInputValue] = useState("")
  const [result, setResult] = useState("yyyy년 mm월 dd일")

  const changeInput = (e) => {
    setInputValue(e.target.value);
    printDate(e.target.value);
  } 
  const printDate = (value) => {
    const temp = new Date();
    temp.setFullYear(year)
    temp.setMonth(Number(month)-1)
    temp.setDate(Number(date)+Number(value)-1)
    const result = `${temp.getFullYear()}년 ${temp.getMonth()+1}월 ${temp.getDate()}일`
    setResult(result)
  }

  useEffect(() => {
    printDate(inputValue);
  }, [inputValue, printDate]);

  return (
    <div className="text">
      <div>
        <input type="text" value={inputValue} onChange={changeInput}/>일째 되는 날은? 
      </div>
      <div>{result}</div>
    </div>
  )
}

export default Plusday
