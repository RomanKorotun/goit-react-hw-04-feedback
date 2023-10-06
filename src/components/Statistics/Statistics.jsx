import React from 'react';
import { Item } from './Statistics.styled';
export const Statistics = ({
  stateObj,
  onTotalOption,
  onPositivePercentage,
}) => {
  return (
    <ul>
      <Item>Good: {stateObj.good}</Item>
      <Item>Neutral: {stateObj.neutral}</Item>
      <Item>Bad: {stateObj.bad}</Item>
      <Item>Total: {onTotalOption()}</Item>
      <Item>Positive feedback: {onPositivePercentage()}%</Item>
    </ul>
  );
};
