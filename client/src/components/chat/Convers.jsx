import { Box, Typography, styled, Avatar } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AccountContext } from '../context/Accountprovider';
import { setConversation, getConversation } from '../../service/api';
import { formatDate } from '../utils/common';

const Container = styled(Box)`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 1px solid #f2f2f2;
  &:hover {
    background-color: #ebebeb;
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 15px;
  width: 50px;
  height: 50px;
`;

const Content = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
  color: #111;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Timestamp = styled(Typography)`
  font-size: 12px;
  color: #999;
  margin-left: 10px;
  white-space: nowrap;
  flex-shrink: 0;
`;

const MessagePreview = styled(Typography)`
  font-size: 14px;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 3px;
`;

const Convers = ({ user }) => {
  const { setPerson, account, newMessageflag } = useContext(AccountContext);
  const [message, setMessage] = useState({});

  if (!user) return null;

  useEffect(() => {
    const getConversationdetails = async () => {
      const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
      setMessage({ text: data?.message, timstamp: data?.updatedAt });
    };
    getConversationdetails();
  }, [newMessageflag]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Container onClick={getUser}>
      <StyledAvatar src={user?.picture || ''} alt={user?.name || 'User'} />
      <Content>
        <Header>
          <Name>{user?.name || 'Unknown User'}</Name>
          {message?.text && (
            <Timestamp>{formatDate(message?.timstamp)}</Timestamp>
          )}
        </Header>
        <MessagePreview>
          {message?.text?.includes('localhost') ? 'media' : message.text}
        </MessagePreview>
      </Content>
    </Container>
  );
};

export default Convers;
