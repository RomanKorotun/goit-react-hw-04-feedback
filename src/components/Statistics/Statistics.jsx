import React from 'react';
import { Item } from './Statistics.styled';
export const Statistics = ({
  stateObj: { good, neutral, bad },
  totalOption,
  positivePercentage,
}) => {
  console.log(good);
  return (
    <ul>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {totalOption}</Item>
      <Item>Positive feedback: {positivePercentage}%</Item>
    </ul>
  );
};
