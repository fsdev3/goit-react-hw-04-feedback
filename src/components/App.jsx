import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section.jsx';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Message/Message';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const onLeaveFeedback = feedbackType => {
    if (feedbackType === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (feedbackType === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (feedbackType === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
    setTotal(prevTotal => prevTotal + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    return total !== 0 ? Math.round((good / total) * 100) : 0;
  };

  const positivePercent = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {total !== 0 ? (
        <Section title="Statistics:">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercent={positivePercent}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};
