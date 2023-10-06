import React from 'react';
import { Item } from './Statistics.styled';
export const Statistics = ({
  stateObj: { good, neutral, bad },
  onTotalOption,
  onPositivePercentage,
}) => {
  return (
    <ul>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {onTotalOption}</Item>
      <Item>Positive feedback: {onPositivePercentage}%</Item>
    </ul>
  );
};
