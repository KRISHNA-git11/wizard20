import React, { Component } from 'react';
import Confirmation from './Confirmation';
import UserEmail from './UserEmail';
import UserFavColor from './UserFavColor';
import UserName from './UserName';
import UserPhysicalDetails from './UserPhysicalDetails';

export class UserDetailsForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    ft: '',
    inch: '',
    weight: '',
    favColor: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  // Proceed to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, age, ft, inch, weight, favColor } =
      this.state;
    const values = {
      firstName,
      lastName,
      email,
      age,
      ft,
      inch,
      weight,
      favColor,
    };
    switch (step) {
      case 1:
        return (
          <UserName
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserEmail
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <UserPhysicalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <UserFavColor
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <div>
            <h1>Sucess</h1>
            <h3>Details Submitted</h3>
          </div>
        );
    }
  }
}

export default UserDetailsForm;
