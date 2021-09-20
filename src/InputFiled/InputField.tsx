import React, { ChangeEvent } from "react";
import { IInputData } from "../types/inputs.types";
import {
  InputFieldS,
  InputS,
  SelectS,
  LabelS,
  TextAreaS,
} from "./InputField.style";

interface IProps {
  label: string;
  name: string;
  type: string;
  value?: string | number;
  defaultValue?: string | number;

  onChage: (data: IInputData) => void;
}

const InputField: React.FC<IProps> = ({ label, onChage, ...props }) => {
  const handleOnChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    let { value, name } = e.target;

    onChage({ value, name });
  };
  let input = <InputS {...props} onChange={handleOnChange} id={props.name} />;
  switch (props.type) {
    case "select":
      input = (
        <SelectS {...props} onChange={handleOnChange} id={props.name}>
          {props.children}
        </SelectS>
      );
      break;
    case "textarea":
      input = <TextAreaS {...props} onChange={handleOnChange} />;
      break;

    default:
      input = <InputS {...props} onChange={handleOnChange} id={props.name} />;
      break;
  }
  return (
    <InputFieldS>
      <LabelS htmlFor={props.name}>{label}</LabelS>
      {input}
    </InputFieldS>
  );
};

export default InputField;
