import styled from 'styled-components';
import { Link } from 'react-router-dom';  

export const MastheadContainer = styled.div `
 height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: seashell;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  height: 60px;
  width: 60px;
  margin:5px; //spacing from edge of masthead
  padding:5px; //adjust Icon size
`;

export const MenusContainer = styled.div`
  //width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

