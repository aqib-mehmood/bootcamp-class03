import React from 'react';
import './custom.css';



const MediaCard = (props) => (
    <div className="media_card">
        <h2 className="title_card">{props.title}</h2>
        <p className='body_text'>{props.body}</p>
        <img src={props.image_url} alt='react logo' title='React logo'/>
    </div>
)

export default MediaCard;