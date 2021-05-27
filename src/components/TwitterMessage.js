import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      charsRemaining: props.maxChars

    };
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value }, this.updateCount(event.target.value))
  }

  updateCount = (string) => {
    this.setState({
      charsRemaining: this.props.maxChars - string.length
    })

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
          value={this.state.message}
        />

        <h3>
          {this.state.charsRemaining} characters remaining
        </h3>


      </div>
    );
  }
}

export default TwitterMessage;
