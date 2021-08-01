import React, { Component } from 'react';

export class UserEmail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <h3>Enter Email Details</h3>
        <form>
          <label>Email:</label>{' '}
          <input
            type="email"
            placeholder="Please enter your Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            required
          />
          <br></br>
          {/* <input type="click" value="Back" onClick={this.back} />
          <input type="click" value="Next" onClick={this.continue} /> */}
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Next</button>
        </form>
      </div>
    );
  }
}

export default UserEmail;
