import React from 'react';
import { Section } from './Section/Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  totalOption = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, item) => (acc += item), 0);
  };

  positivePercentage = () => {
    const { good, neutral, bad } = this.state;
    return ((good / this.totalOption()) * 100).toFixed(0);
  };

  render() {
    return (
      <Section
        title="Please leave feedback"
        stateObj={this.state}
        onLeaveFeedback={this.leaveFeedback}
        onTotalOption={this.totalOption}
        onPositivePercentage={this.positivePercentage}
      />
    );
  }
}
