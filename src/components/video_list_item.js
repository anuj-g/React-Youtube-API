import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="media-left video-item">
                <img className="media-object" src={video.snippet.thumbnails.default.url} />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </li>
    );
}

export default VideoListItem;