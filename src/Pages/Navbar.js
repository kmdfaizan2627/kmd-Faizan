import React from "react";
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import BadgeIcon from '@mui/icons-material/Badge';

const Container = styled.div`
color:blue;
height: 60px;
background:white;
padding: 10px 20px;
overflow:hidden;`

const Wrapper = styled.div
`
align-items: center;
padding: 10px 20px;
display: flex;
justify-content:space-between;
`;

const Left = styled.div`
width: 33.3%;
flex:1;
display:flex;
align-items: center;
`;
const SearchContainer = styled.div`
border:0.5px solid lightgray;
margin-left:25px;
display: flex;
align-items: center;
padding:5px;
`;
const Input = styled.input`
border:none;
`

const Language = styled.span`
font-size:14px;
cursor: pointer;
`;

const Center = styled.div`
width: 33.3%;
`;
const Logo = styled.h1`
font-weight:bold;
text-align:center;

`



const Right = styled.div`
width:33.3%;
display:flex;
justify-content: flex-end;
`;
const MenuItem = styled.div`
font-size:14px;
curson: pointer;
margin-left:25px;`

const Navbar = () => {
return (
     <Container>
      <Wrapper>
       <Language>SEARCH</Language>
        <SearchContainer>
        <Input/>
            <SearchIcon style={{color:"grey", fontsize:14}}/>
        </SearchContainer><Left></Left>
         <Center><Logo>SIMPLE-FIT</Logo></Center>
      <Right><MenuItem>REGISTER</MenuItem>
             <MenuItem>SIGN IN</MenuItem>
             <MenuItem>
                <BadgeIcon/>
            </MenuItem>
         
             
             
      </Right>
     </Wrapper>
    </Container>
                    )
}
export default Navbar;
                   