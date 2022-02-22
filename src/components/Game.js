import React from "react";
// Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detialAction";
import { Link } from "react-router-dom";
import {smallImage} from '../util';
import { popup } from "../animation";

const Game = ({name,released,image,id}) =>{
    // load detail handler
    const stringPathId = id.toString(); 

    const dispatch = useDispatch();
    document.body.style.overflow = "hidden"
    const loadDetailHandler = () =>{
      
        dispatch(loadDetail(id))

    }



    return(
        <StyledGame variants={popup} initial='hidden' animate="show" layoutId={stringPathId} onClick={loadDetailHandler}>
        <Link to={`/game/${id}`}>

            <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image,640)} alt={name} />
        </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
cursor:pointer;
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0,0,0,0.2) ;
text-align: center;
border-radius: 1rem;
overflow:hidden;
img{
    
    width:100%;
    height: 40vh;
    object-fit: cover;
}
@media (max-width:1000px) {
    width: 90%;
    
    h3{
        font-size: 1rem;
    }
    p{
        font-size: 0.8rem;
    }
       img{
           height: 20vh;
       }
       
       
       
   }
`;


export default Game;