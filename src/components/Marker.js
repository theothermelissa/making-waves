import React, { Component } from "react";

class Marker extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     commentShown: false,
  //   }
  //   this.onMouseEnter = this.onMouseEnter.bind(this);
  //   this.onMouseLeave = this.onMouseLeave.bind(this);
  // }
  // onMouseEnter() {
  //   this.setState({ commentShown: true })
  // };
  // onMouseLeave() {
  //   this.setState({ commentShown: false})
  // };
  
  render() {
    return (
      <div className="markerContainer" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
        {/* {this.state.commentShown && (
          <div className="commentBubble">Let me tell you a thing!</div>
        )} */}
          <div className={this.props.className}></div>
          <div className="post" onClick={this.handleClick}></div>
      </div>
    )
  }
};

export default Marker;