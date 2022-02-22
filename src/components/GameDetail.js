import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { smallImage } from "../util";
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
// import stars
import starEmpty from "../img/star-empty.png";
import starFull from '../img/star-full.png'


const GameDetail = ({pathId}) =>{
    const history = useNavigate();
    const {screen,game , isLoading} = useSelector((state) => state.detail)
    const exitDetailHandler  = (e) =>{
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = "auto";
            history('/');
        }
    }
    // GET PLATFORM IMG

    const getPlatform = (platform) =>{
        switch(platform){
            case "PlayStation 4":
                return playstation;
            case "PlayStation 5":
                return playstation;
            case "Xbox One":
                return xbox;
            case "Xbox Series S/X":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }
    // starsss
    const getStars = () =>{
        const stars = [];
        const rating = Math.floor(game.rating);
        for(let i = 1;i<= 5;i++){
            if(i <=rating){
                stars.push(<img alt="star" key={i} src={starFull}></img>)
            }else{
                stars.push(<img alt="star" key={i} src={starEmpty}></img>)

            }
        }
        return stars;

    }
    return(
        <>
        {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
            <Detail layoutId={pathId} className="detail">
                <Stats className="stats">
                    <div className="raiting">
                        <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                        <p>Raiting:{game.rating}</p>
                        <div className="stars">
                        {getStars()}
                        </div>
                    </div>
                    <Info className="info">
                        <h3>Platforms</h3>
                        <Platforms className="platforms">
                            {game.platforms.map((data) =>(
                                <img alt="image" src={getPlatform(data.platform.name)} key={data.platform.id}></img>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media className="media">
                    <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image,1280)} alt="img" />
                </Media>
                <Description className="description">
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen =>(
                        <img src={smallImage(screen.image,1280)} key={screen.id} alt="img"/>
                    ))}
                </div>
            </Detail>

        </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
cursor:pointer;
    width:100%;
    min-height: 100vh;
    overflow-y:scroll;
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    z-index: 5;
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#ff7676;
    }
    &::-webkit-scrollbar-track{
        background-color:#ffffff;
    }
`;

const Detail = styled(motion.div)`
    width:80%;
    border-radius:1rem;
    z-index: 10;
    padding:2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color:black;
    img{
        width:100%;
    }
    @media (max-width:1000px) {
       
       padding:2rem;
     

       
   }
`;

const Stats = styled(motion.div)`
display:flex;
align-items:center;
justify-content:space-around;
.raiting{
    .stars{
        display: flex;
        width: 6rem;
    }
}
@media (max-width:1000px) {
       
       flex-direction: column;
       .raiting{
           h3{
               font-size: 1rem;
            }
            p{
               font-size: 1rem;

           }
           .stars{
               width: 4rem;
           }
       }

       
   }

`;
const Info = styled(motion.div)`
    text-align:center;
    @media (max-width:1200px) {
        width: 100%;
        text-align: start;
        h3{
            font-size: 1rem;
        }
      

       
   }

`;
const Platforms = styled(motion.div)`
    display:flex;
    /* margin:0rem 2rem; */
    justify-content:space-evenly;
    img{
        width: 2rem;
        margin-left:3rem;
    }
    @media (max-width:1000px) {
      img{
          width: 1.2rem;
          margin-left: 1rem;
      }

       
   }

`;

const Media = styled(motion.div)`
    margin-top:5rem;
    img{
        width:100%;
        height:60vh;
        object-fit:cover;
    }
    @media (max-width:1200px) {
       
       img{
           height: 20vh;
       }

       
   }


`;
const Description = styled(motion.div)`
    margin:5rem 0rem;
    @media (max-width:1200px) {
       p{
       font-size: 0.8rem;
       }

       
   }
`;


export default GameDetail;
