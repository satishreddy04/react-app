import React from 'react';

const VideoListItem=(props)=>{
    const video = props.video;
    const videoSelect= props.onVideoClick;
    const imageurl= video.snippet.thumbnails.default.url;
    return (
    <li onClick={()=>videoSelect(video)} className="list-group-items">
        <div className ="video-list media">
            <div className="media-left">
                <img className="media-object"  src={imageurl} />
            </div>
            <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
            </div>
            
        </div>

        
     </li>
);


}

export default VideoListItem;