import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import { LoadingContext } from '../../core/components/Loading/contexts/LoadingContext';
import { API } from '../../shared/consts/api.consts';
import { AmiibosGallery } from './components/AmiibosGallery/AmiibosGallery';

export function AmiibosPage(){
    const {setIsLoading} = useContext(LoadingContext)
    const [amiibos, setAmiibos] = useState([])
    const getAmiibos = () => {
        /* axios.get(process.env.REACT_APP_BACK_URL + 'amiibo').then((res)=> {
            setAmiibos(res.data.amiibo)
        }) */
        setIsLoading(true)
        API.get('amiibo').then((res)=>{
            setIsLoading(false)
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