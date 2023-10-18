import { Button, ButtonsContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ arrBtn, onLeaveFeedback }) => {
  return (
    <ButtonsContainer>
      {arrBtn.map(item => (
        <Button key={item} onClick={() => onLeaveFeedback(item)}>
          {item}
        </Button>
      ))}
    </ButtonsContainer>
  );
};
