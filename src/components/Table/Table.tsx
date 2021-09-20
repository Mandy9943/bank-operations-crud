import React from "react";
import { data } from "../../types/data.types";
import { TableContentS, TableWrapperS } from "./Table.style";
import TableItem from "./TableItem/TableItem";

interface IProps {
  data: data[];
  handleDelete: (data: data) => void;
  handleEdit: (data: data) => void;
  onSortAmount: () => void;
}

const Table = ({ data, onSortAmount, handleDelete, handleEdit }: IProps) => {
  return (
    <TableWrapperS>
      <TableContentS>
        <thead>
          <tr className="head">
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th className="clickeable" onClick={onSortAmount}>
              Amount ($)
            </th>
            <th>Avilable Balance</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {data.map((dataItem, i) => (
            <TableItem
              key={i + 1}
              data={dataItem}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
          <tr className="body">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </TableContentS>
    </TableWrapperS>
  );
};

export default Table;
