import React from 'react';
import '../AmiibosGallery/AmibosGallery.scss';
import { Link } from 'react-router-dom';
export function AmiibosGallery(props){
    return(
        <div className="row">
            {props.amiibos.map((amiibo, i)=>
            <figure key={i} className="col-xl-3 col-lg-4 col-md-6 col-12 c-amiibos-gallery">
                <img className="imageGallery" src={amiibo.image}></img>
                <figcaption className="nameamiibo">{amiibo.name}</figcaption>
                <Link to={"/amiibos/"+ amiibo.tail} className="detailbutton">Show detail</Link>
            </figure>)
            }
        </div>
    )
}