import { useContext, useEffect, useState } from "react";
import Chatheader from "./Chatheader";
import Messages from "./Messages";
import { AccountContext } from "../context/Accountprovider";
import { Box, styled } from "@mui/material";
import { getConversation } from "../../service/api"; // ✅ Import this

const Wrapper = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Chatbox = () => {
  const { person, account } = useContext(AccountContext);
  const [Conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      if (!person?.sub || !account?.sub) return;
      const data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person?.sub, account?.sub]); // ✅ Add safety and dependency

  return (
    <Wrapper>
      <Chatheader person={person} />
      <Messages person={person} Conversation={Conversation} />
    </Wrapper>
  );
};

export default Chatbox;
