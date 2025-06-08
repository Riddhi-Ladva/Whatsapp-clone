import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const Image = styled('img')({
  height: 40,
  width: 40,
  objectFit: 'cover',
  borderRadius: '50%'
});

const NameContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const Status = styled(Typography)`
  font-size: 12px;
  color: gray;
`;

const IconContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #919191;
`;

const Chatheader = ({person}) => {
  return (
    <Header>
      <LeftContainer>
        <Image src={person.picture} alt="dp" />
        <NameContainer>
          <Typography style={{ fontSize: 14, fontWeight: 500 }}>{person.name}</Typography>
          <Status>Offline</Status>
        </NameContainer>
      </LeftContainer>
      <IconContainer>
        <Search fontSize="small" />
        <MoreVert fontSize="small" />
      </IconContainer>
    </Header>
  );
};

export default Chatheader;
