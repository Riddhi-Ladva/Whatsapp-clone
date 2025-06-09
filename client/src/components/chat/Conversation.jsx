import React, { useContext, useEffect, useState } from 'react';
import { getUsers } from '../../service/api';
import Convers from './Convers';
import { Box, Divider, styled } from '@mui/material';
import { AccountContext } from '../context/Accountprovider';

const StyleDivider = styled(Divider)`
  margin: 0 0 0 70px;
  opacity: 0.6;
`;
const Styledbox=styled(Box)`
background-color:#f6f6f6;
`;

const Conversation = ({ text }) => {
  const [users, setUsers] = useState([]);
  const {account,socket,setActiveuser}=useContext(AccountContext);
  useEffect(() => {
   const fetchData = async () => {
  const response = await getUsers();
  if (Array.isArray(response)) {
    const filterdata = response.filter(users =>
      (users.name || '').toLowerCase().includes(text.toLowerCase())
    );
    setUsers(filterdata);
  } else {
    console.error("getUsers() did not return an array", response);
    setUsers([]);
  }
};

    fetchData();
  }, [text]);

  useEffect(()=>{
    socket.current.emit('addUsers',account);
    socket.current.on("getUsers",users=>{
      setActiveuser(users);
    })
  },[account])

  return (
    <Styledbox>
      {users.map(user => (
        <React.Fragment key={user._id}>
          <Convers user={user} />
          <StyleDivider />
        </React.Fragment>
      ))}
    </Styledbox>
  );
};

export default Conversation;
