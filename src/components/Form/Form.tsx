import React, { FormEvent } from "react";
import InputField from "../../InputFiled/InputField";
import { data } from "../../types/data.types";
import { IInputData } from "../../types/inputs.types";
import Button from "../Button/Button";
import { FomrBodyS, FormHeadS, FormS } from "./Form.style";

interface IProps {
  onSubmit: (data: data) => void;
  onChange: (data: IInputData) => void;
  operation: data;
}

const Form = ({ onSubmit, onChange, operation }: IProps) => {
  const habdleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(operation);
  };

  return (
    <FormS>
      <FormHeadS>
        <h2>Add a new Operation</h2>
      </FormHeadS>
      <FomrBodyS onSubmit={habdleSubmit}>
        <InputField
          value={operation.date}
          name="date"
          label="Operation Date"
          type="date"
          onChage={onChange}
        />
        <InputField
          value={operation.description}
          name="description"
          label="Operation Description"
          type="textarea"
          onChage={onChange}
        />
        <InputField
          value={operation.type}
          name="type"
          label="Operation Type"
          type="select"
          onChage={onChange}
        >
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
        </InputField>
        <InputField
          value={operation.amount}
          name="amount"
          label="Operation Amount"
          type="number"
          onChage={onChange}
        />
        <InputField
          value={operation.balance}
          name="balance"
          label="Operation Balance"
          type="text"
          onChage={onChange}
        />
        <Button type="submit" style={{ background: "steelblue" }}>
          Save
        </Button>
      </FomrBodyS>
    </FormS>
  );
};

export default Form;
