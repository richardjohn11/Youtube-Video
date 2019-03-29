import React, { Component } from "react";
import "./VideoItem.css";

class VideoItem extends Component {
  state = {};
  render() {
    const { snippet } = this.props.video;

    return (
      <React.Fragment>
        <div
          onClick={() => this.props.onVideoSelect(this.props.video)}
          className="video-item item"
        >
          <img
            alt={snippet.title}
            className="ui image"
            src={snippet.thumbnails.medium.url}
          />
          <div className="content">
            <div className="header">{snippet.title}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VideoItem;
