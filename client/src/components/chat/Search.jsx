import { Box, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)`
  height: 49px;
  background-color: #f6f6f6;
  padding: 10px 12px;
  display: flex;
  align-items: center;
`;

const SearchWrapper = styled(Box)`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const SearchIconWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: #919191;
`;

const StyledInput = styled(InputBase)`
  width: 100%;
  padding: 9px 16px 9px 48px;
  font-size: 14px;
  font-family: inherit;
  color: #3b4a54;
`;

const Search = ({setText}) => {
  return (
    <Container>
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon fontSize="small" />
        </SearchIconWrapper>
        <StyledInput placeholder="Search or start new chat" onChange={(e)=>setText(e.target.value)} />
      </SearchWrapper>
    </Container>
  );
};

export default Search;
