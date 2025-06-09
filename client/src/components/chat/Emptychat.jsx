import { Box, styled, Typography } from "@mui/material";
import emptychat from "../constants/empty.png";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width:995px;
  background-color: #f0f2f5;
  text-align: center;
  padding: 32px;
    margin-top:13px;

`;

const Image = styled("img")`
  width: 995px;
  height: auto;
  margin-bottom: 24px;
`;

const Text = styled(Typography)`
  font-size: 18px;
  color: #41525d;
`;

const Empty = () => {
  return (
    <Container>
      <Image src={emptychat} alt="empty chat" />
<Text sx={{ fontSize: '50px' }}>Whatsapp Web</Text>
      <Text>Keep your phone connected</Text>
      <Typography style={{ color: "#8696a0", fontSize: 14 }}>
        WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.
      </Typography>
    </Container>
  );
};

export default Empty;
