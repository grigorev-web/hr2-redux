import { useState } from "react";
import DayPicker, { DateUtils } from 'react-day-picker';
import {Helmet} from "react-helmet";
import "react-day-picker/lib/style.css";

export default function DateRange({setFromTo}) {

  const [range, setRange] = useState({
    from: null,
    to: null,
    enteredTo: null, // Keep track of the last day for mouseEnter.
  });


  function isSelectingFirstDay(from, to, day) {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }////////////////////////////////////////////////////


  function handleDayClick(day) {
    const { from, to } = range;
    if (from && to && day >= from && day <= to) {
      handleResetClick();
      return;
    }
    if (isSelectingFirstDay(from, to, day)) {
      setRange({
        from: day,
        to: null,
        enteredTo: null,
      });
    } else {
      setFromTo([from,day])
      setRange({
        ...range,
        to: day,
        enteredTo: day,
      });
    }
  }////////////////////////////////////////

  function handleDayMouseEnter(day) {
    const { from, to } = range;
    if (!isSelectingFirstDay(from, to, day)) {
      setRange({
        ...range,
        enteredTo: day,
      });
    }
  }//////////////////////////////////////////

  function handleResetClick() {
    setFromTo(['',''])
    setRange({
      from: null,
      to: null,
      enteredTo: null, // Keep track of the last day for mouseEnter.
    });
  } /////////////////////////////////////////////////////


  const { from, to, enteredTo } = range;
  const modifiers = { start: from, end: enteredTo };
  const disabledDays = { before: from };
  const selectedDays = [from, { from, to: enteredTo }];

  return (
    <div className="mb-2 border p-1">
      <DayPicker
        className="Range"
        numberOfMonths={1}
        //fromMonth={from}
        firstDayOfWeek={1}
        selectedDays={selectedDays}
        disabledDays={disabledDays}
        modifiers={modifiers}
        onDayClick={handleDayClick}
        onDayMouseEnter={handleDayMouseEnter}
        weekdaysShort={weekDays}
        months={months}
      />
      <div style={{minHeight:30}}>
        {!from && !to && 'Выберите дату'}
        {from && !to && 'Выберите до какого числа.'}
        {from &&
          to &&
          `с ${from.toLocaleDateString()} по
              ${to.toLocaleDateString()}`}{' '}
        {from && to && (
          <button className="link btn btn-outline-secondary btn-sm" onClick={handleResetClick} title="Сбрость дату">
            Сбросить
          </button>
        )}
      </div>
      <Helmet>
        <style>{`
.Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
  background-color: #4a90e2a8 !important;
  color: #ffffff;
}
.Range .DayPicker-Day {
  border-radius: 0 !important;
  padding: 0.3em;
}
.Range .DayPicker-Day--end {
  border-radius: 0px 20px 20px 0px !important;
}
.Range .DayPicker-Day--start {
  border-radius: 20px 0px 0px 20px !important;
}
.Range .DayPicker-Day--start.DayPicker-Day--end {
  border-radius: 20px 20px 20px 20px !important;
}
.Range .DayPicker-Caption {
  margin-bottom: 0px;
}
.Range .DayPicker-Caption > div {
  font-size: 1em;
}
`}</style>
      </Helmet>
    </div>
  )
}


const weekDays = [
  'Вс',
  'Пн',
  'Вт',
  'Ср',
  'Чт',
  'Пт',
  'Сб',
];

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];