import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../context/Accountprovider";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f2f5;
  height: 100vh;
  padding-top: 20px;
`;

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #fff;
  padding: 30px 0;
`;

const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  objectFit: "cover",
});

const InfoWrapper = styled(Box)`
  width: 100%;
  background: #fff;
  padding: 20px 30px;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

const Label = styled(Typography)`
  font-size: 14px;
  color: #009688;
  margin-bottom: 8px;
`;

const Value = styled(Typography)`
  font-size: 16px;
  color: #4a4a4a;
`;

const Description = styled(Box)`
  width: 100%;
  background: #fff;
  padding: 15px 30px;
  border-bottom: 1px solid #f0f0f0;

  & > p {
    font-size: 14px;
    color: #8696a0;
  }
`;

const AboutSection = styled(Box)`
  width: 100%;
  background: #fff;
  padding: 20px 30px;
`;

const Profile = () => {
  const { account } = useContext(AccountContext);

  return (
    <Container>
      <ImageContainer>
        <Image src={account.picture} alt="dp" />
      </ImageContainer>

      <InfoWrapper>
        <Label>Your Name</Label>
        <Value>{account.name}</Value>
      </InfoWrapper>

      <Description>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </Description>

      <AboutSection>
        <Label>About</Label>
        <Value>Eat! Sleep! Code! Repeat!</Value>
      </AboutSection>
    </Container>
  );
};

export default Profile;
