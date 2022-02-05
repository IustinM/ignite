const initState = {
    popular : [],
    newGames : [],
    upComing : [],
    searched:[],
}


const gamesReducer = (state=initState,action) =>{
    switch(action.type){
        case "FETCH_GAMES":
            return {...state,
                popular:action.payload.popular,
                newGames:action.payload.newGames,
                upComing:action.payload.upComing
            }
        default:
            return {...state}
    }

 }


 export default gamesReducer;