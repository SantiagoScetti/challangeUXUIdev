//Se utiliza para combinar clases de CSS condicionalmente (util para agregar clases basadas en un valor)
import clsx from "clsx";
//Se usa para tipar la propiedad status (puede ser "Approved", "Pending" o "Rejected").
import type { ProductStatusProps } from "../table/table";
import styles from "./status.module.scss";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const getStatusStyles = (status: ProductStatusProps) => {
  return clsx(styles.container, {
    [styles.approved]: status === "Approved",
    [styles.pending]: status === "Pending",
    [styles.rejected]: status === "Rejected",
  });
};

export const Status = ({ status }: { status: ProductStatusProps }) => {
  return (
    <div className={getStatusStyles(status)}>
      {status === "Approved" && <CheckCircleIcon aria-hidden="true" />}
      {status === "Pending" && <ExclamationCircleIcon aria-hidden="true" />}
      {status === "Rejected" && <XCircleIcon aria-hidden="true" />}
      <p>{status}</p>
    </div>
  );
};
