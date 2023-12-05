import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Container = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;`
const Left = styled.div``
const Logo = styled.h1``
const Desc  = styled.p``
const SocialContainer = styled.div`
display:flex;`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:60%;
color:white;
background-color:#${props=>props.color};`

const Center = styled.div``
const Right =styled.div``
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Amazon</Logo>
      <Desc> lists a variety of reasons why customers who frequent its website may want a Prime subscription. Below you'll find a few. </Desc>
      <SocialContainer>
      
      <SocialIcon color='1DA1F2'><TwitterIcon/></SocialIcon>
      <SocialIcon color='E4405F'><PinterestIcon/></SocialIcon>
      <SocialIcon color='4267B2'><FacebookIcon/></SocialIcon>
     </SocialContainer>
      
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default Footer