import { FeedbackButtons } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtons>
      {options.map(el => {
        return (
          <button
            key={nanoid()}
            type="button"
            onClick={() => onLeaveFeedback(el)}
          >
            {el}
          </button>
        );
      })}
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
