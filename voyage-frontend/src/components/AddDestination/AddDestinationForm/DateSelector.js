import { today, next365Days } from '../../../date.js';

const DateSelector = (props) => {
  return (
    <div className="Date-Selector">
      <p>DATES (optional):</p>
      <label>FROM</label>
      <input
        type="date"
        min={today}
        onChange={props.onDateFromChange}
        value={props.destinationData.dateFrom}
      />
      <label>TO</label>
      <input
        type="date"
        min={props.destinationData.dateFrom}
        max={next365Days}
        onChange={props.onDateToChange}
        value={props.destinationData.dateTo}
      />
    </div>
  );
};

export default DateSelector;
