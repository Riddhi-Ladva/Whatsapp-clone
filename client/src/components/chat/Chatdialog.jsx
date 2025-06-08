import { Dialog, styled, Box } from "@mui/material";
import Menu from './Menu';
import Empty from "./Emptychat";
import Chatbox from "./Chatbox";
import { AccountContext } from "../context/Accountprovider";
import { useContext } from "react";

const Component = styled(Box)`
  display: flex;
  height: 100%;
  background:#f6f6f6;
`;

const Left = styled(Box)`
  width: 450px;
  background: #f0f2f5;
`;

const Right = styled(Box)`
  flex: 1;
  background:#f6f6f6;
`;

const dialogStyle = {
  height: '95%',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  margin: '20px',
  boxShadow: 'none',
  overflow: 'hidden',
};

const ChatDialog = () => {
  const { person } = useContext(AccountContext);

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
    >
      <Component>
        <Left>
          <Menu />
        </Left>
        <Right>
          {Object.keys(person).length ? <Chatbox /> : <Empty />}
        </Right>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
