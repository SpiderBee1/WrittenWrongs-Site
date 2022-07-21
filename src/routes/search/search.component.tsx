import { Fragment } from "react";
import { Outlet } from 'react-router-dom';

const Search = () => {
  return(
    <Fragment>
      --comment
      <Outlet/>
    </Fragment>
  );
}