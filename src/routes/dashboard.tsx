import { ProductProps, Table } from "../components/table/table";
import data from "../data/data.json";
import styles from "./dashboard.module.css";


export const Dashboard  = () => {
  return (
    <div className={styles.dashboard}>
      <Table data={data.orders as ProductProps[]} />
    </div>
  );
};
