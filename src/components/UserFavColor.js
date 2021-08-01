import React, { Component } from 'react';

export class UserFavColor extends Component {
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
        <h3>Select Your Favourite Color</h3>
        <form>
          <label>Choose color : </label>
          <select
            onChange={handleChange('favColor')}
            defaultValue={values.favColor}
          >
            <option value="" disabled>
              Select Color
            </option>
            <option value="violet">Violet</option>
            <option value="indigo">Indigo</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
          </select>
          <br></br>
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Next</button>
        </form>
      </div>
    );
  }
}

export default UserFavColor;
