import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListItem from 'material-ui/List/ListItem';
import { List } from 'material-ui';
export class Confirmation extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, age, ft, inch, weight, favColor },
    } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Age" secondaryText={age} />
            <ListItem primaryText="Height" secondaryText={`${ft}'${inch}`} />
            <ListItem primaryText="Weight" secondaryText={weight} />
            <ListItem primaryText="Favourite Color" secondaryText={favColor} />
          </List>
        </MuiThemeProvider>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Next</button>
      </div>
    );
  }
}

export default Confirmation;
