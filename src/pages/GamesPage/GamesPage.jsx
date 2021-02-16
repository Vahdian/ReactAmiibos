import React from 'react'
import { LoadingContext } from '../../core/components/Loading/contexts/LoadingContext';

import {useState, useEffect, useContext} from 'react'
import { API } from '../../shared/consts/api.consts'

export function GamesPage(props){
    const {setIsLoading} = useContext(LoadingContext)

    const [games, setGames] = useState([])
    const getGames = () => {
        setIsLoading(true)
        API.get('gameseries').then((res)=>{
            setIsLoading(false)
            setGames(res.data.amiibo)
            console.log(res.data.amiibo)
        })
        
    }
    useEffect(getGames, []);
    
    return(
        <div>
        {games.map((game, i)=>
            <h1 index={i}>{game.name}</h1>
            )}
            </div>
       
    )
    
}