
import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
align-items:center;
display:flex;
justify-content:center;
flex-direction:column`


const Title = styled.h1`
font-size:60px;
margin-bottom:20px;`

const Description = styled.div`
font-size:20px;
font-weight:300;
margin-bottom:20px;`

const InputContainer = styled.div`
width:50%; 
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;`

const Input = styled.input`
border:none;
flex:8;`

const Button = styled.button`
background-color:teal;
color:white;
flex:1;
padding-left:20px;
`


const Newletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
        <Description>Get Timely Update For your Favorite item. </Description>
            <InputContainer>
            <Input placeholder=" Your Email"/>
            <Button><SendIcon/></Button>
        </InputContainer>
    
       
     
    </Container>
  )
}

export default Newletter
