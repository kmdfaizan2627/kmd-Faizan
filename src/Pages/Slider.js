import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";
import {SliderItems} from  "../Data"




const Container = styled.div`
 width:100%;
 height:100vh;
 display:flex;
 position:relative;
 margin-top:20px;
 overflow :hidden;
 margin-top:0;

 
`
const Arrow = styled.div`
 width:50px;
 height:50px;
 border-radius:50%;
 display:flex;
 align-item:center;
 justify-content:center;
 position:absolute;
 top:0;
 margin: auto;
 bottom:0;
 left:${props=> props.direction ==="left"&& "10px"};
 right:${props=> props.direction ==="right"&& "10px"};
 cursor:pointer;
 opacity:0.5;
 z-index: 3;

`
const Wrapper = styled.div`
height:50%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${(props)=>props.slideIndex * -100}vw);
`


const Slide = styled.div`
display:flex;
align-item:center;
width:100vw;
height:100vh;
flex:1;
background-color:#FFCBA4;
background-color:#${(props)=>props.bg}

`;

const ImgContainer = styled.div`
flex:1;
height:100%;
`;
const Image = styled.img`
margin-left: 150px;
margin-top: 50px;
height: 75%;
font-size: 81px;
width: 600px;

`;
const InfoContainer = styled.div`
padding: 40px;
margin-left:30px;

`;
const TitLe = styled.h1`
font-size:30px;
display:flex;
margin-top:70px;
font-style: normal;
font-size:50px;
display: inline-block;
margin-left:-10px;

`;
const Desc = styled.p`
margin:40px 0px;
font-size:18px;
margin-right:330px;
font-weight:40px;
font-style: italic;
leatter-spacing:4px;
`;
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
border: solidgray;
cursor:pointer;

`;
const Slider = ()=>
{

  const [slideIndex, SetslideIndex]= useState(0);
  const handleClick=(direction)=>{
    if(direction ==="left"){
      SetslideIndex(slideIndex >0 ? slideIndex -1 : 2);
    }
else{
  SetslideIndex(slideIndex <2 ? slideIndex +1 : 0);
}
  };

  return(
    <Container>
  <Arrow direction="left" onClick={()=>handleClick("left")}>
  <ArrowLeftIcon/>

  </Arrow>
    <Wrapper slideIndex={slideIndex}>
       {SliderItems.map(item=>(

    <Slide bg ={item.bg} key= {item.id}>
   
    <ImgContainer>
    <Image src={item.img}/>
    </ImgContainer>
      
    <InfoContainer>
      <TitLe>{item.title}</TitLe>
      <Desc>
      {item.desc}
      </Desc>
      <Button>
      LOGIN
      </Button>
    </InfoContainer>
  
    </Slide>
 
 ))}
    </Wrapper>
     

  <Arrow direction="right" onClick={()=>handleClick("right")}>
 
  <ArrowRightIcon/>
    </Arrow>
</Container>
  );
  };
export default Slider;
