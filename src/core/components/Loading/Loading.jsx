import React, { useContext } from 'react';
import '../Loading/Loading.scss'
import { LoadingContext } from './contexts/LoadingContext';
export function Loading(){
    const {isLoading} = useContext(LoadingContext)
    return(
       isLoading && <div className="c-loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>

 
 )
}