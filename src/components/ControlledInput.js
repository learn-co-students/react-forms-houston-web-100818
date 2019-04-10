// Code ControlledInput Component Here
import React from "react";

class ControlledInput extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //   handleChange = event => {
  //     this.setState({
  //       value: event.target.value
  //     });
  //   };

  handleSubmit = event => {
    event.preventDefault();
    this.sendFormDataSomewhere(this.state);
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {/* <input type="text" name="firstName" value={this.state.firstName} />
        <input type="text" name="lastName" value={this.state.lastName} /> */}
      </form>
    );
  }
}

export default ControlledInput;
