import React  from 'react';
import Media  from './media';
import './playlist.css';

function Playlist(props) {
    const playlist = props.data.categories[0].playlist
    const title = props.data.categories[0].title 
    const description = props.data.categories[0].description 
    console.log(props.data);
    return(
        <div className="Playlist">
            <h2 className="Playlist-title">{title}:</h2>
            <h4 className="Playlist-description">{description}</h4>
            {  
                playlist.map((item)=>{
                    return <Media {...item} key={item.id}/>
                })
            }
        </div>
    )
} 

export default Playlist;