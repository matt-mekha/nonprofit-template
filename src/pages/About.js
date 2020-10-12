import React from 'react';

import Title from '../components/Title';

const BubbleVisualizer = () => {
  const size = 600;

  return (
    <div className="bubbleVisualizerContainer">
      <iframe className="bubbleVisualizer" src="misc/bubbles.html"></iframe>
    </div>
  );
}

export default () => (
  <>
    <Title>Meet the Team:</Title>
    <BubbleVisualizer />
  </>
)