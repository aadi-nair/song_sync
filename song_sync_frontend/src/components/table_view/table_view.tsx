import { formatDate } from "@/utils/date";
import "./table_view.css";
import { ReactNode } from "react";
import { nanoid } from "nanoid";

function getNestedValue(obj: any, key: string) {
  return key.split(".").reduce((acc, part) => acc && acc[part], obj);
}
function TableRow({
  columns,
  row,
  border,
}: {
  columns: any;
  row: any;
  border: boolean;
}): ReactNode {
  //   rowIndex < data.length - 1
  return [
    ...columns.map((col: any, colIndex: number) => (
      <div
        key={`${row.id}-${colIndex}`}
        style={{
          borderBottom: border ? "1px solid #e0e0e0" : "none",
        }}
        className={`table-cell row-cell  fs-small ${
          colIndex === 1 ? "cursor-pointer" : ""
        }`}
      >
        <>
          {col.key === "created_at"
            ? formatDate(row[col.key])
            : getNestedValue(row, col.key)}
        </>
      </div>
    )),
  ];
}

function TableView({ columns, data }: { columns: any; data: any }) {
  const alteredColumns = [...columns];

  return (
    <div
      key={`table-${nanoid()}`}
      style={{
        display: "grid",
        gridTemplateColumns: alteredColumns
          .map((col: any) => col.weight)
          .join(" "),
      }}
    >
      {/* Render table headers */}
      {alteredColumns.map((col: any, index: number) => (
        <div key={index} className="header table-cell fs-small fw-medium">
          {col.title}
        </div>
      ))}

      {/* Render table data */}
      {data.map((row: any, rowIndex: number) => (
        <TableRow
          key={`row-${nanoid()}`}
          columns={columns}
          row={row}
          border={rowIndex < data.length - 1}
        />
      ))}
    </div>
  );
}

export default TableView;
