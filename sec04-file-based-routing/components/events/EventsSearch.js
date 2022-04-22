import { useState } from "react";
import { Button } from "../ui/Button";
import classes from "./EventsSearch.module.css";

export const EventsSearch = (props) => {
  const { onSearch } = props;
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("1");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(year, month);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select
            id="year"
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select
            id="month"
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
            }}
          >
            <option value="1">1月</option>
            <option value="2">2月</option>
            <option value="3">3月</option>
            <option value="4">4月</option>
            <option value="5">5月</option>
            <option value="6">6月</option>
            <option value="7">7月</option>
            <option value="8">8月</option>
            <option value="9">9月</option>
            <option value="10">10月</option>
            <option value="11">11月</option>
            <option value="12">12月</option>
          </select>
        </div>
      </div>
      <Button>イベントを探す</Button>
    </form>
  );
};
