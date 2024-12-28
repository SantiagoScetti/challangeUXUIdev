import React from "react";

//libreria para manejar tablas de datos en React. 
// Proporciona utilidades como manejo de columnas, sorting, y renderizado
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import styles from "./table.module.css";
import { Status } from "../status/status";


export type ProductStatusProps = "Approved" | "Pending" | "Rejected";

export type ProductProps = {
  id: number;
  customer: string;
  date: string;
  product: string;
  status: ProductStatusProps;
  email: string;
  amount: string;
  paymentMethod: string;
};

type Props = {
  data: ProductProps[];
};

const defaultColumns: ColumnDef<ProductProps>[] = [
  {
    header: "Customer",
    accessorKey: "customer",
  },
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Product",
    accessorKey: "product",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      return <Status status={row.original.status} />;
    }, //función para usar las funciones del componente status que renderiza sus estilos
   
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
];

export const Table = ({ data }: Props) => {
  const [columns] = React.useState(() => [...defaultColumns]);

  const [sorting, setSorting] = React.useState <SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  return (

    <div className={styles.tableContainer}>
      <h2>Transactions</h2>
      <p>Recent transactions from your store.</p>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
               
                <td key={cell.id} >
                 
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     
  );
};
