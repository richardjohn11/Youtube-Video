import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="ui relaxed divided list">
          {this.props.videos.map(video => {
            return (
              <VideoItem
                key={video.id.videoId}
                onVideoSelect={this.props.onVideoSelect}
                video={video}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default VideoList;
