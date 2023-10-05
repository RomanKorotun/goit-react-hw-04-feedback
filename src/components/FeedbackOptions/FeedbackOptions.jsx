import { Button, ButtonsContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ stateObj, onLeaveFeedback }) => {
  const keys = Object.keys(stateObj);
  return (
    <ButtonsContainer>
      {keys.map((item, idx) => (
        <Button
          key={item[idx]}
          onClick={evt => onLeaveFeedback(evt.target.textContent)}
        >
          {item}
        </Button>
      ))}
    </ButtonsContainer>
  );
};
