import React from 'react';
import './SignIn.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passowrd: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.email + ' ' + this.state.passowrd);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            name="email"
            type="text"
            maxLength="20"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Passowrd:
          <input
            name="passowrd"
            type="text"
            maxLength="20"
            checked={this.state.passowrd}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    );
  }
}

export default SignIn;
