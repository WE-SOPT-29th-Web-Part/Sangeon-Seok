import React, {useEffect} from 'react'

const DateInput = ({year, month, date, setYear, setMonth, setDate}) => {
  const inputChange = (e, setDay) => {
    setDay(e.target.value)
  }

  const handleToday = () => {
    const today = new Date()
    setYear(today.getFullYear())
    setMonth(today.getMonth() + 1)
    setDate(today.getDate())
  }

  return (
    <div>
      <div id="dateInput">
        <button onClick={handleToday}>오늘</button>
        <div>
          <input type="text" value={year} onChange={(e) => inputChange(e, setYear)}/>년 
          <input type="text" value={month} onChange={(e) => inputChange(e, setMonth)}/>월
          <input type="text" value={date} onChange={(e) => inputChange(e, setDate)}/>을 기준으로
        </div>
      </div>
    </div>
  )
}

export default DateInput
