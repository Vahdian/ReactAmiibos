import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { API } from '../../../shared/consts/api.consts';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../components/AmiibosGallery/AmibosGallery.scss'
 


export function AmiibosDetailPage(){
    const{idamiibo} = useParams();
    const [amiibodetails, setAmiiboDetails] = useState([])
    const getAmiiboDetails = () => {
        
        API.get('amiibo/?tail=' + idamiibo).then((res)=>{
            setAmiiboDetails(res.data.amiibo)
            console.log(res.data.amiibo)
        })
    }

    useEffect(getAmiiboDetails, []);


    return(
        <div>
        {amiibodetails.map((amiibo, i)=>
        <div key={i} className="c-amiibos-gallery2">
        
        <h1>Hi! I'm {amiibo.name}! </h1>
        <img src={amiibo.image} className="imageGallery"></img>
        <h1>Series: {amiibo.amiiboSeries}</h1>
        <h1>EU Release date: {amiibo.release.eu}</h1>
        <Link to="/amiibos" className="backbutton">{"Go Back!"}</Link>

        </div>
        )}
        </div>
    )
}