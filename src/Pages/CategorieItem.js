
import styled from "styled-components";

const Container =styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`;
const Image = styled.img`
width:90%;
margin:2px;
object-fit:cover;
font-size:20%;
`
;
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%
display:flex;
flex-direction:column;
align-iten:center;
justify-content:center;
`;

const Title = styled.h1`
font:white;
margin-bottom:20px;
display:center;
margin-left:70px;

margin-top:-33px;
font-size:20px;
`
;
const Button = styled.button`
border:none;
padding:5px;
background-color:orange;
color:sky;
cursor:pointer;
font-weight:600;
`;

 

const CategorieItem =({item})=>{
    return(
        <Container>
           
            <Image src={item.img} key={item.id}/>
            <Info>    
                 <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
            </Info>
       
        </Container>
    )

 }
 export default CategorieItem