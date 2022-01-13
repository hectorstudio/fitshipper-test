import React, { useState } from "react";
import { useTable, usePagination, Column } from "react-table";
import { Address } from "../services/addresses";
import FieldsForm from "./FieldsForm";
import FreeForm from "./FreeForm";
import Modal from "./Modal";

interface TableProps {
  columns: Column<Address>[];
  data: Address[];
  onEdit: (e: Address) => void;
  onDelete: (e: Address) => void;
}

const Table = ({ columns, data, onEdit, onDelete }: TableProps) => {
  const [selected, setSelected] = useState<Address>();
  const [isFields, setIsFields] = useState(true);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // @ts-ignore
    page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize,
    // @ts-ignore
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      // @ts-ignore
      initialState: { pageSize: 5 }
    },
    usePagination
  );
  // Render the UI for your table
  return (
    <>
      <button
        type="submit"
        onClick={() => setSelected({} as Address)}
        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
      >
        Create New
      </button>
      <table className="min-w-full divide-y divide-gray-200"{...getTableProps()}>
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
              <th></th>
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200" {...getTableBodyProps()}>
          {page.map((row: any, i: number) => {
            prepareRow(row);
            return (
              <tr className="cursor-pointer" {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" onClick={() => setSelected(row.original)}>
                  <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900" onClick={() => onDelete(row.original)}>Delete</button>
              </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center my-2 items-center pagination">
        <button className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <p className="text-sm text-gray-700 ml-2 mr-1">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </p>
        <p className="text-sm text-gray-700 ml-1 mr-2">
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            className="border rounded-md"
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "30px" }}
          />
        </p>{" "}
        <button className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <select
          className="block pl-3 pr-10 py-2 text-base border mx-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 15, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      {selected && (
        <Modal title="To Address">
          {isFields ? <FieldsForm
            data={selected}
            onSubmit={(e: Address) => {
              onEdit(e);
              setSelected(undefined);
            }}
            onClose={() => setSelected(undefined)}
            onSwitch={() => setIsFields(!isFields)}
          /> : <FreeForm
            data={selected}
            onSubmit={(e: Address) => {
              onEdit(e);
              setSelected(undefined);
            }}
            onClose={() => setSelected(undefined)}
            onSwitch={() => setIsFields(!isFields)}
          />}
        </Modal>)}
    </>
  );
};

export default Table;
