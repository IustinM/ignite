import React,{useEffect} from "react";
import GameDetail from "../components/GameDetail";
import {useDispatch,useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
// import components
import Game from "../components/Game";
// styles and animation
import styled from "styled-components";
import { motion,AnimatePresence,AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn  } from "../animation";
const Home = () => {
    // get current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch((loadGames()))
    },[dispatch]);
    const {popular,newGames,upComing,searched} = useSelector(state => state.games)
    
    // get the data back

    return(
        <GameList variants={fadeIn} initial='hidden' animate="show" className="">
        <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
        { pathId && <GameDetail pathId={pathId}/>}
        </AnimatePresence>
        {searched.length ? (
        <div className="searched">
            <h2>Searched Games</h2>
            <Games>
                {searched.map(game =>( 
                <Game 
                name={game.name} 
                released={game.released} 
                id={game.id} 
                image={game.background_image}
                 key ={game.id}
                />
                ))}
            </Games>
            </div>
            ) : (
                ""
            )}
            <h2>Upcoming Games</h2>
            <Games>
                {upComing.map(game =>( 
                <Game 
                name={game.name} 
                released={game.released} 
                id={game.id} 
                image={game.background_image}
                 key ={game.id}
                />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map(game =>( 
                <Game 
                name={game.name} 
                released={game.released} 
                id={game.id} 
                image={game.background_image}
                 key ={game.id}
                />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map(game =>( 
                <Game 
                name={game.name} 
                released={game.released} 
                id={game.id} 
                image={game.background_image}
                 key ={game.id}
                />
                ))}
            </Games>
            </AnimateSharedLayout>
        </GameList>
    );
}
const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0;
    }
    @media (max-width:1000px) {
       
       padding:1rem;
       h2{
           font-size: 2rem;
       }
       

       
   }

`;
const Games = styled(motion.div)`
min-height: 80vh;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
@media (max-width:1000px) {
    justify-items: center;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    
    

       
   }


`;

export default Home;