
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Info = styled.div`
widht:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:3;
display:flex;
align-items:center;
background-color:;
cursor:pointer;
justify-content:center;

`




const Container =styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
position:relative;
background-color:#f5fbfd;
&:hover ${Info}{opacity:1;
         }`;



const Circle = styled.div`
width:200px;
height:200px;
border-redius:50%;
background-color:white;
position:absolute;

`



const Image = styled.img`
height:75%;
z-index:2;

`;

 

const Icon = styled.div`

height:40px;
width:30px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margine:10px;
justify-content:center;
 &:hover{
        background-color:#e9f5f5; 
        transform:scale(1.1);
}
`;

 

const CategeriesItem =({item})=>{
    return(
     
         <Container>
                <Circle/>
            <Image src={item.img} key={item.id}/>
            <Info>    
               <Icon>
                <ShoppingCartIcon/>
                </Icon>
                <Icon>
                <SearchIcon/>
                </Icon>
                <Icon>
                <FavoriteBorderIcon/>
                </Icon> 
                </Info>
           
          
            
          
        </Container>
    )

 }
 export default CategeriesItem;