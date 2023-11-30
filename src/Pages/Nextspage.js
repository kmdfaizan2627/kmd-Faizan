
import styled from "styled-components";
import { maindata } from "../DataItem";
import CategeriesItem from "./CategeriesItem";


const Container= styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-between;`

const Nextspage = ()=>{
    return(
        <Container>
         {maindata.map(item=>(
           < CategeriesItem item ={item} />
        ))}  
         
        </Container>
    )

 }
    

export default Nextspage;