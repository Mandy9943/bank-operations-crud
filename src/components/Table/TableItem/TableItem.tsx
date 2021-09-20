import React, { Fragment } from "react";
import { data } from "../../../types/data.types";
import Button from "../../Button/Button";
interface IProps {
  data: data;
  onDelete: (data: data) => void;
  onEdit: (data: data) => void;
}
const TableItem = ({ data, onDelete, onEdit }: IProps) => {
  const handleDelete = () => {
    onDelete(data);
  };
  const handleEdit = () => {
    onEdit(data);
  };
  return (
    <Fragment>
      <tr className="body">
        <td>{data.date}</td>
        <td>{data.description}</td>
        <td>{data.type}</td>
        <td>{data.amount}</td>
        <td>{data.balance}</td>
        <td style={{ display: "flex" }}>
          <Button
            style={{ margin: "5px", background: "darkviolet" }}
            onClick={handleEdit}
          >
            <span className="fa fa-edit"></span>
          </Button>{" "}
          <Button
            style={{ margin: "5px", background: "crimson" }}
            onClick={handleDelete}
          >
            <span className="fa fa-times"></span>
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default TableItem;
