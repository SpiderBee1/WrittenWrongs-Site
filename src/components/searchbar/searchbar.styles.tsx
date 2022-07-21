import styled from "styled-components";

/**
 * this searchbar is used in the masthead as a general search tool
 *
 * when something is typed and the input has focus, a menu
 * drops down for how the input should be used in the search (EX. Roblox, TMX)
 */
export const SearchBarBorder = styled.div`
  height: 80%;
  width: 100%;
  max-width: 400px;
  display: flex;
  
  border: 3px solid salmon;
  border-radius: 30px;
  align-items: center;
  
`;

//TODO center magnifying glass in container
export const SearchIconContainer = styled.div`
  //height: 100%;
  margin: 5px;
  padding: 5px
  
`;

export const SearchTextArea = styled.input`
  height:100%;
  width: 100%;
  border-radius: 30px;
  padding-left: 20px;
  border-style: solid;
  //background-color: blue;
`;
