import React from 'react';
import { SectionCard, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionCard>
      <Title>{title}</Title>
      {children}
    </SectionCard>
  );
};
