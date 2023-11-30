
import styled from "styled-components";
import { nextpage } from "../Data";
import CategorieItem from "./CategorieItem";


const Container= styled.div`
display:flex;
padding:20px;`

const Nextpage = ()=>{
    return(
        <Container>
         {nextpage.map(item=>(
           < CategorieItem item ={item} />
        ))}  
         
        </Container>
    )

 }
    

export default Nextpage;