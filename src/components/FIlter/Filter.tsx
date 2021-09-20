import React, { Component } from "react";
import { DateWithoutHourNumber } from "../../lib/date.helper";
import DataService from "../../services/data-service";
import { data } from "../../types/data.types";
import { IInputData } from "../../types/inputs.types";
import Button from "../Button/Button";
import DatePicker from "../DatePicker/DatePicker";
import Form from "../Form/Form";
import Table from "../Table/Table";
import {
  FormContainerS,
  FilterS,
  PickerS,
  HeaderS,
  BodyS,
} from "./Filter.style";

interface IState {
  filterDate: string;
  data: data[];
  indexData: number;
  formData: data;
}

export class Filter extends Component<{}, IState> {
  operations: data[];
  service: DataService;
  constructor(props: any) {
    super(props);

    const dataService = new DataService();
    this.service = dataService;

    this.operations = this.service.getOperations();

    this.state = {
      filterDate: "",
      data: this.operations,
      formData: {
        date: "",
        description: "",
        type: "Debit",
        amount: 0,
        balance: "0",
      },
      indexData: -1,
    };
  }
  private updateUIData = () => {
    const operations = this.service.getOperations();
    this.operations = operations;

    this.setState({
      ...this.state,
      data: operations,
      indexData: -1,
      formData: {
        ...this.state.formData,
        date: "",
        description: "",
        type: "Debit",
        amount: 0,
        balance: "0",
      },
    });
    // this.handleTriggerFilter();
  };

  /* Filters events */
  private handleDatePickerCahnge = (date: string) => {
    this.setState({ ...this.state, filterDate: date });
  };
  private handleTriggerFilter = () => {
    const filterDate = this.state.filterDate;
    if (filterDate !== "") {
      const pickerDate = DateWithoutHourNumber(filterDate);

      const newData = this.operations.filter((dataItem) => {
        const dataDate = DateWithoutHourNumber(dataItem.date);

        return pickerDate === dataDate;
      });

      this.setState({ ...this.state, data: [...newData] });
    } else {
      this.setState({ ...this.state, data: [...this.operations] });
    }
    console.log(filterDate);
  };
  private handleSortAmount = () => {
    const newData = this.state.data.sort(
      (dataA, dataB) => dataA.amount - dataB.amount
    );
    this.setState({ ...this.state, data: [...newData] });
  };

  /* Form Events */
  private handleSubmitForm = (operation: data) => {
    if (this.state.indexData < 0) {
      this.service.addOperation(operation);
    } else {
      this.service.editOperation(operation, this.state.indexData);
    }

    this.updateUIData();
    this.handleTriggerFilter();
  };
  private handleOnChangeForm = (dataInput: IInputData) => {
    let { name, value } = dataInput;

    this.setState({
      ...this.state,
      formData: { ...this.state.formData, [name]: value },
    });
  };
  private handleDelete = (operation: data) => {
    this.service.deleteOperation(operation);
    this.updateUIData();
  };
  private handleEdit = (operation: data) => {
    const index: number = this.state.data.findIndex(
      (o) =>
        o.amount === operation.amount &&
        o.balance === operation.balance &&
        o.date === operation.date &&
        o.description === operation.description &&
        o.type === operation.type
    );

    this.setState({ ...this.state, formData: operation, indexData: index });
  };

  render() {
    return (
      <FilterS>
        <FormContainerS>
          <Form
            onSubmit={this.handleSubmitForm}
            onChange={this.handleOnChangeForm}
            operation={this.state.formData}
          />
        </FormContainerS>
        <HeaderS>
          <PickerS>
            <DatePicker onChange={this.handleDatePickerCahnge} />
          </PickerS>
          <Button onClick={this.handleTriggerFilter}>Filter</Button>
        </HeaderS>
        <BodyS>
          <Table
            data={this.state.data}
            onSortAmount={this.handleSortAmount}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </BodyS>
      </FilterS>
    );
  }
}

export default Filter;
