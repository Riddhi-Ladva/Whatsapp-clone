import { Dialog,Box, Typography, List, ListItem, styled } from "@mui/material";
import qrCodeImage from '../constants/qrcode.png';
import {GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // ✅ correct
import { useContext } from "react";
import { AccountContext } from "../context/Accountprovider";
import { useState, useEffect } from 'react';
import {addUser} from '../../service/api';
const Component=styled(Box)`
    display: flex;
`
const dialogStyle={
    height:'96%',
    marginTop:'12%',
    width: '60%',
    maxWidth:'100%',
    maxHeight: 'none',
    overflow: 'none'
}

const Container= styled(Box)`
    padding: 56px 0 56px 56px;
`
const Title=styled(Typography)`
    font-size:26px;
    color:#525252;

`

const Logindialog=()=>{

    const {setAccount}=useContext(AccountContext);
    const onLoginError=()=>
    {
    }
    const onLoginSuccess=async (res)=>{
                const decoded=jwtDecode(res.credential);
                setAccount(decoded);
                await addUser(decoded);

    }
    return (
        <Dialog
        open={true} 
        PaperProps={{sx:dialogStyle}}
        hideBackdrop={true}>
            <Component>
                <Container>
                    <Title>To use whatsapp on your computer:<br></br><br></br></Title>
                    <List style={{fontSize: '18px'}}>
                        <ListItem>1. Open Whatsapp on your phone</ListItem>
                        <ListItem>2. Tap Menu setting and select whatsapp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Container>
                <Box style={{position:'relative'}}>
<img src={qrCodeImage} alt="qr code" style={{ width: '350px', height: '350px' , marginLeft: '50px', marginTop:'50px'}} />
                       <Box style={{position: 'absolute', top:'50%', transform: 'translatex(25%)', marginLeft:'90px'}}>
                        <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError} />
                        </Box> 
                    </Box>
            </Component>
        </Dialog>
    )
}

export default Logindialog;