import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

import { Statistics } from 'components/Statistics/Statistics';
import React from 'react';
import { SectionFeedback, Title } from './Section.styled';

export const Section = ({
  title,
  stateObj,
  onLeaveFeedback,
  onTotalOption,
  onPositivePercentage,
}) => {
  return (
    <SectionFeedback>
      <Title>{title}</Title>
      <FeedbackOptions stateObj={stateObj} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        good={stateObj.good}
        neutral={stateObj.neutral}
        bad={stateObj.bad}
        total={onTotalOption}
        positivePercentage={onPositivePercentage}
      />
    </SectionFeedback>
  );
};
