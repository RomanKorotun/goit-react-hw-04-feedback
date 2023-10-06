import { Notification } from 'components/Notification/Notification';
import React from 'react';
import { Item, Title } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (good || neutral || bad) {
    return (
      <div>
        <Title>Statistics</Title>
        <ul>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total()}</Item>
          <Item>Positive feedback: {positivePercentage()}%</Item>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <Title>Statistics</Title>
      <Notification message="There is no feedback!"></Notification>
    </div>
  );
};
