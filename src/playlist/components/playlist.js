import React  from 'react';
import Media  from './media';
import './playlist.css';
import Play from '../../icons/components/play';
import FullScreen from '../../icons/components/full';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';

function Playlist(props) {
    const playlist = props.data.categories[0].playlist
    const title = props.data.categories[0].title 
    const description = props.data.categories[0].description 
    console.log(props.data);
    return(
        <div className="Playlist">
            <Play 
                size={50} 
                color="red"
            />
            <FullScreen
                size={50}
                color="lightBlue"
            />
            <Pause
                size={50}
                color="peru"
            />
            <Volume
                size={40}
                color="purple"
            />
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