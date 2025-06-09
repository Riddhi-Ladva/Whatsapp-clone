import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../context/Accountprovider";
import { getMessage, newMessage } from '../../service/api';
import Message from "./Message";


const Wrapper = styled(Box)`
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  background-size: 50%;
  background-repeat: repeat;
  height: 100%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, Conversation }) => {
  const { account,socket,newMessageflag, setNewMessage } = useContext(AccountContext);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [incoming,setIncoming]=useState(null);

  useEffect(()=>{
    socket.current.on('getMessage',data=>{
      setIncoming({
        ...data,
        createdAt:Date.now()
      })
    })
  },[])

  useEffect(()=>{
    incoming && Conversation?.members?.includes(incoming.senderId)&&
    setMessages(prev=>[...prev,incoming])
  },[incoming,Conversation])
  useEffect(() => {
    const getMessageDetails = async () => {
      if (!Conversation?._id) return;
      const data = await getMessage(Conversation._id);
      setMessages(data);
    };

    getMessageDetails();
  }, [person._id, Conversation._id, newMessageflag]);

  const senttext = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13 && value.trim()) {
      const message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: Conversation._id, // ✅ FIXED typo here
        type: file ? 'file' : 'text',
        text: file ? image : value
      };
socket.current.emit('sendMessage',message);
      await newMessage(message);
      setValue('');
      setFile(null);
      setImage(null);
      setNewMessage(prev => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {messages && messages.map(message => (
          <Container key={message._id || message.id}>
            <Message message={message} />
          </Container>
        ))}
      </Component>
      <Footer
  senttext={senttext}
  value={value}
  setValue={setValue}
  file={file}
  setFile={setFile}
  setImage={setImage}
  senderId={account.sub}
  receiverId={person.sub}
  conversationId={Conversation._id}
  setNewMessage={setNewMessage}
/>

    </Wrapper>
  );
};

export default Messages;
