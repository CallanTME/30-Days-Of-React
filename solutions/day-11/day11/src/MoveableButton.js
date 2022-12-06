import { Fragment } from "react";
import React from "react";

class MoveableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        marginLeft: "1000px",
        marginTop: "500px",
      },
    };
  }
  handleMouseEnter = (e) => {
    const randMarginLeft = 1500 * Math.random();
    const randMarginTop = 750 * Math.random();

    this.setState({
      style: {
        marginLeft: `${randMarginLeft}px`,
        marginTop: `${randMarginTop}px`,
      },
    });
  };
  render() {
    const left = this.state.style.marginLeft;
    const top = this.state.style.marginTop;
    return (
      <Fragment>
        <button
          style={{ marginLeft: left.toString(), marginTop: top.toString() }}
          onMouseEnter={this.handleMouseEnter}
        >
          CLICK ME!
        </button>
      </Fragment>
    );
  }
}

export default MoveableButton;
