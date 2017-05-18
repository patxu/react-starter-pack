import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  } else {
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div id="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
        <div className="details">
          <div className="title">{video.snippet.title}</div>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
