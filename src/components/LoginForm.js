import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUNChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.handleLogin(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" className="username" type="text" value={this.state.username} onChange={event => this.handleUNChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" className="password" type="password" value={this.state.password} onChange={event => this.handlePChange(event)} />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
