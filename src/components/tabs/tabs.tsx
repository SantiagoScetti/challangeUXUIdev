import { NavLink, Outlet } from "react-router-dom";
import classes from "./tabs.module.scss";

export const Tabs = () => (
  <>
    <ul className={classes.tabs}>
      <li>
        <NavLink className={classes.a} to={`/`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink className={classes.a} to={`/orders`}>Orders</NavLink>
      </li>
    </ul>
    <Outlet />
  </>
);
