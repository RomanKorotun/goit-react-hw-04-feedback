import { Button, ButtonsContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ keys, onLeaveFeedback }) => {
  return (
    <ButtonsContainer>
      {keys.map(item => (
        <Button key={item} onClick={() => onLeaveFeedback(item)}>
          {item}
        </Button>
      ))}
    </ButtonsContainer>
  );
};
