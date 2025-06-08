import { useContext, useState } from "react";
import { AccountContext } from "../context/Accountprovider";
import { Box,styled} from "@mui/material";
import {Chat as MessageIcon} from '@mui/icons-material';
import Headermenu from "./Headermenu";
import InfoDrawer from "../drawer/InfoDrawer";

const Component=styled(Box)`
    height:44px;
    background: #ededed;
    padding: 8px 16px;
    display:flex;
    align-items:center;
`;
const Wrapper=styled(Box)`
    margin-left:auto;
    & > * {
    margin-left:2px;
    padding:8px;
    color:#000;
    };
    & :first-child{
        font-size:22px;
        margin-right:8px;
        margin-top:3px;

    }
`
const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:'50%'
})

const Header=()=>
{
    const [opendrawer,setopendrawer]=useState(false);

    
    
    const {account}=useContext(AccountContext);
            console.log("Account data:", account);

    const toggleDrawer=()=>{
        setopendrawer(true);
    }
    return(
        <>
        <Component>

            <Image src={account?.picture} alt="dp"  onClick={()=>toggleDrawer()}/>
            <Wrapper>
            <MessageIcon/>
            {/* <MoreVert/> */}
            <Headermenu setopendrawer={setopendrawer}/>
            </Wrapper>
        </Component>
        <InfoDrawer open={opendrawer} setOpen={setopendrawer}/>
</>
    )
}

export default Header;