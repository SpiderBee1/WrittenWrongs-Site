//styling
import { SearchBarBorder, SearchIconContainer, SearchTextArea } from "./searchbar.styles";
import { ReactComponent as Magnifier } from '../../assets/Magnifier.svg';

const Searchbar = () => {
  return (
    <SearchBarBorder>
      <SearchIconContainer>
        <Magnifier />
      </SearchIconContainer>
      <SearchTextArea type="text" placeholder="just use advanced for now!"/>
    </SearchBarBorder>
  );
};

export default Searchbar;