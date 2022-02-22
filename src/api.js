// Base url
const key = "435676f887eb4bc8a39d61fb9a23e56a";
const base_url = `https://api.rawg.io/api/games?key=${key}`


// getting date
const getCurrentMonth = () =>{
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`
    }else{
        return month;
    }
}

const getCurrentDay= () =>{
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`
    }else{
        return day;
    }
}
// current day/month/year
const currentYear =  new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear =`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear =`${currentYear+1}-${currentMonth}-${currentDay}`

// popular games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-raiting&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () =>`${base_url}${popular_games}`;
export const upcomingGamesUrl = () =>`${base_url}${upcoming_games}`;
export const newGamesUrl = ()=> `${base_url}${newGames}`;
export const gameDetailsURL =(game_id) => `https://api.rawg.io/api/games/${game_id}.json?&key=${key}`
export const GameScreenshotURL = (game_id) => `https://api.rawg.io/api/games/${game_id}/screenshots?&.json?&key=${key}`;
// searched game
export const searchedGameUrl = (game_name) => `https://api.rawg.io/api/games?search=${game_name}?&key=${key}&page_size=9`;
