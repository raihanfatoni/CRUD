import React, { Component } from "react";
import VideovrComponent from "../components/VideovrComponent";
import { connect } from "react-redux";
import { getVideovrList } from '../actions/videovrAction'

class VideovrContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getVideovrList());
  }

  render() {
    return (
      <div>
        <VideovrComponent />
      </div>
    );
  }
}

export default connect()(VideovrContainer);
