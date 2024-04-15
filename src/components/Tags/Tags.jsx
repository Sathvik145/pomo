import styled,{css} from "styled-components";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Tags() {
    
    const{activeTag,setActiveTag}=useContext(StateContext);//0 is the index of the first tag i.e work

    const handleTagClick =(index)=>{
        setActiveTag(index);
    }//for allowing to click the 3 buttons

  return (
    <TagsContainer>
        {
            ["Work","Short Break","Long Break"].map((tag,i)=>(
            <Tag 
            onClick={()=>handleTagClick(i)}
            activeTag={activeTag==i} 
            key={i}
            >{tag}</Tag>))
        }
    </TagsContainer>
  )
}

const TagsContainer=styled.div`
    background: #100930;
    padding: 0.5rem;
    height: 5rem;
    width: 40rem;
    margin: 0 auto;
    border-radius: 5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`
const Tag=styled.button`
    all:unset;
    text-align: center;
    border-radius: 5rem;
    height: 4rem;
    flex: 1;
    font-size: 2rem;
   

    ${({activeTag})=> activeTag && css`
    background: #b85600;
    ` }
`