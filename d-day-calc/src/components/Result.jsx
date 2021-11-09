import React from "react";
import Plusday from "./Plusday";
import Minusday from "./Minusday";

const Result = ({ year, month, date }) => {
  return (
    <div id="result">
      <Plusday year={year} month={month} date={date} />
      <Minusday year={year} month={month} date={date} />
    </div>
  );
};

export default Result;
