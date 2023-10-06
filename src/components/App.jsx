import React from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

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
    const { good } = this.state;
    return ((good / this.totalOption()) * 100).toFixed(0);
  };

  render() {
    return (
      <React.Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            stateObj={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.totalOption() ? (
            <Statistics
              stateObj={this.state}
              onTotalOption={this.totalOption}
              onPositivePercentage={this.positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </React.Fragment>
    );
  }
}
