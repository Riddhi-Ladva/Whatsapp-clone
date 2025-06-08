import { Box, InputBase, styled } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { useEffect } from "react";
import { uploadFile, newMessage } from "../../service/api";

const Container = styled(Box)`
  height: 55px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 16px;
`;

const InputContainer = styled(Box)`
  background: white;
  border-radius: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5px 15px;
`;

const StyledInput = styled(InputBase)`
  flex: 1;
  font-size: 14px;
`;

const Footer = ({
  senttext,
  setValue,
  value,
  file,
  setFile,
  setImage,
  senderId,
  receiverId,
  conversationId,
  setNewMsgTrigger
}) => {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        try {
          const response = await uploadFile(data);
          if (response?.data) {
            setImage(response.data);

            await newMessage({
              senderId,
              receiverId,
              conversationId,
              text: response.data, // image URL
              type: "file"
            });

            setNewMsgTrigger(prev => !prev); // To re-fetch messages
            setValue('');
            setFile(null);
          }
        } catch (err) {
          console.error("Upload error:", err.message);
        }
      }
    };

    getImage();
  }, [file]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  return (
    <Container>
      <SentimentSatisfiedAltIcon style={{ color: '#919191' }} />
      <label htmlFor="fileInput">
        <AttachFileIcon style={{ color: '#919191', transform: 'rotate(40deg)' }} />
      </label>
      <input
        type="file"
        style={{ display: 'none' }}
        id="fileInput"
        onChange={onFileChange}
      />
      <InputContainer>
        <StyledInput
          placeholder="Type a message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={senttext}
        />
      </InputContainer>
      <MicNoneIcon style={{ color: '#919191' }} />
    </Container>
  );
};

export default Footer;
