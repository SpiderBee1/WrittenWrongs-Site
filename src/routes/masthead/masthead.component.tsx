import { Fragment } from "react";
import { Outlet } from 'react-router-dom';
import { LogoContainer, MastheadContainer, MenusContainer } from "./masthead.styles";

import { ReactComponent as SiteLogo } from '../../assets/shrimp-svgrepo-com.svg';
import Searchbar from "../../components/searchbar/searchbar.component";

const Masthead = () => {
  return (
    <Fragment>
      <MastheadContainer>
        <LogoContainer to='/'>
          <SiteLogo className='logo' />
        </LogoContainer>
        <Searchbar />
        <MenusContainer>
          
        </MenusContainer>
      </MastheadContainer>
      <Outlet />
    </Fragment>
  );
}

export default Masthead;