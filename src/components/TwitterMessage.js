import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: ''

    };
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState = ({
      message: event.target.value
    })
    console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>

        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleChange(event)}
          
          />
          

      </div>
    );
  }
}

export default TwitterMessage;
