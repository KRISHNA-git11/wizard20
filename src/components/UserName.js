import React, { Component } from 'react';

export class UserName extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <h1>Hello</h1>
        <h3>Enter your name</h3>
        <form>
          <label>First Name:</label>{' '}
          <input
            type="text"
            placeholder="Enter First Name"
            defaultValue={values.firstName}
            onChange={handleChange('firstName')}
            required
          />
          <br></br>
          <label>Last Name:</label>{' '}
          <input
            type="text"
            placeholder="Enter Last Name"
            defaultValue={values.lastName}
            onChange={handleChange('lastName')}
            required
          />
          <br></br>
          {/* <input type="submit" value="Next" onSubmit={this.continue} /> */}
          <button onClick={this.continue}>Next</button>
        </form>
      </div>
    );
  }
}

export default UserName;
