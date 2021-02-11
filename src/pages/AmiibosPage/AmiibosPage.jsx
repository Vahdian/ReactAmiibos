import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { API } from '../../shared/consts/api.consts';
import { AmiibosGallery } from './components/AmiibosGallery/AmiibosGallery';

export function AmiibosPage(){
    const [amiibos, setAmiibos] = useState([])
    const getAmiibos = () => {
        /* axios.get(process.env.REACT_APP_BACK_URL + 'amiibo').then((res)=> {
            setAmiibos(res.data.amiibo)
        }) */
        API.get('amiibo').then((res)=>{
            setAmiibos(res.data.amiibo)
        })
    }

    useEffect(getAmiibos, []);


    return(
        <div>
        <h1>AMIIBOS</h1>
        <AmiibosGallery amiibos={amiibos}></AmiibosGallery>
        </div>
    )
}