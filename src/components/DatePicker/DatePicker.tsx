import React, { ChangeEvent } from "react";
import { DatePickerS } from "./DatePicker.style";

interface IProps {
  onChange: (date: string) => void;
}

const DatePicker = ({ onChange }: IProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <DatePickerS type="date" onChange={handleChange} />;
};

export default DatePicker;
