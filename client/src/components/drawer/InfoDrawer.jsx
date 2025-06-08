import { ArrowBack } from "@mui/icons-material";
import { Drawer, Typography,styled,Box } from "@mui/material";
import Profile from "./Profile";

const drawerstyle={
    
    top:17,
    height:'95%',
    width:'30%',
    boxShadow:'none'
}
const Header=styled(Box)`
background:#008069;
height:107px;
color:#FFFFFF;
display:flex;
& > svg, & > p{
margin-top:auto;
padding:15px;
font-weight:600;
}
`;

const Component=styled(Box)
`background:#ededed;
height:85%;
margin-left:20px;
`
const InfoDrawer=({open,setOpen})=>
{
    const handleClose=()=>{
        setOpen(false);
    }
    return (


        <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{sx:drawerstyle}}
      style={{zIndex:1500}}
    >
<Header>
    <ArrowBack onClick={()=>setOpen(false)}/>
        <Typography>Profile</Typography>
</Header>
<Component><Profile/></Component>
    </Drawer>

    )
}

export default InfoDrawer;