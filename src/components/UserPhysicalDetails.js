import React, { Component } from 'react';

export class UserPhysicalDetails extends Component {
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
        <h3>Enter details</h3>
        <form>
          <label>Select age:</label>{' '}
          <select onChange={handleChange('age')} defaultValue={values.age}>
            <option value="" disabled>
              Select Age
            </option>
            <option value="17 and under">17 and under</option>
            <option value="18-24">18-24</option>
            <option value="24-35">24-35</option>
            <option value="36-45">36-45</option>
            <option value="45 and older">45 and older</option>
          </select>
          <br></br>
          <label>Height(ft):</label>{' '}
          <input
            type="text"
            defaultValue={values.ft}
            onChange={handleChange('ft')}
          />
          <br></br>
          <label>Height(in):</label>{' '}
          <input
            type="text"
            defaultValue={values.inch}
            onChange={handleChange('inch')}
          />
          <br></br>
          <label>Weight(kgs):</label>{' '}
          <input
            type="text"
            defaultValue={values.weight}
            onChange={handleChange('weight')}
          />
          <br></br>
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Next</button>
        </form>
      </div>
    );
  }
}

export default UserPhysicalDetails;
