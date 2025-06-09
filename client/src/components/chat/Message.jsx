import { Box, Typography, styled } from "@mui/material";
import { formatDate } from "../utils/common";
import { useContext } from "react";
import { AccountContext } from "../context/Accountprovider";
import DownloadIcon from '@mui/icons-material/Download';

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;
  word-break: break-word;
`;

const Wrapper = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  border-radius: 10px;
  width: fit-content;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  word-break: keep-all;
  margin-top: 4px;
  text-align: end;
`;

const Message = ({ message }) => {
  const { account } = useContext(AccountContext);
console.log(message);
  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          {message.type === 'file' ? (
            <Box>
              <img src={message.text} style={{ width: 200, borderRadius: 10 }} />
              <Time>{formatDate(message.createdAt)}</Time>
            </Box>
          ) : (
            <>
              <Text>{message.text}</Text>
              <Time>{formatDate(message.createdAt)}</Time>
            </>
          )}
        </Own>
      ) : (
        <Wrapper>
          {message.type === 'file' ? (
            <Box>
              <img src={message.text} style={{ width: 200, borderRadius: 10 }} />
              <Time>{formatDate(message.createdAt)}</Time>
            </Box>
          ) : (
            <>
              <Text>{message.text}</Text>
              <Time>{formatDate(message.createdAt)}</Time>
            </>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Message;
