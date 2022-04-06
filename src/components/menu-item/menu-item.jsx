import React from 'react';
import './menu-item.styles.scss';
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";
const MenuItem=({title,imageUrl,size,history,linkUrl,match})=>{
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    return <div 
    className={`${size} menu-item`} onClick={() => {
        navigate(linkUrl );
      }}>
        <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}} >
    
        </div>
    <div className="content">
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <span className='subtitle'>
            Shop Now
        </span>
    </div>
    </div>;
}

export default MenuItem;