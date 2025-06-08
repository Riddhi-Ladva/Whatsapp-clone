import { useContext } from "react";
import Logindialog from "./account/Logindialog";
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { AccountContext } from "./context/Accountprovider";
import ChatDialog from "./chat/Chatdialog";
const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 35px;
  background-color:rgb(11, 132, 115);
  box-shadow: none;
`;

const Component = styled(Box)`
  height: 100vh;
  background: #DCDCDC;
`;

function Messenger() {
  const { account } = useContext(AccountContext);

  return (
  <Component>
    {account ? (
      <>
        <Header>
          <Toolbar />
        </Header>
        <ChatDialog />
      </>
    ) : (
      <>
        <LoginHeader>
          <Toolbar />
        </LoginHeader>
        <Logindialog />
      </>
    )}
  </Component>
);

}

export default Messenger;
