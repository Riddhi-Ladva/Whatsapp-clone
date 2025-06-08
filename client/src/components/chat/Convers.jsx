import { Box, Typography, styled, Avatar } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../context/Accountprovider';
import { setConversation } from '../../service/api'; // ✅ ensure this import is correct

const Container = styled(Box)`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #f0f2f5;
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 15px;
  width: 50px;
  height: 50px;
`;

const Name = styled(Typography)`
  font-weight: 500;
`;

const Convers = ({ user }) => {
  const { setPerson, account } = useContext(AccountContext);

  if (!user) return null;

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Container onClick={getUser}>
      <StyledAvatar src={user?.picture || ''} alt={user?.name || 'User'} />
      <Name>{user?.name || 'Unknown User'}</Name>
    </Container>
  );
};

export default Convers;
