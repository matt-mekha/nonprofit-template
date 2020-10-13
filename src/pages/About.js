import React, { useLayoutEffect, useState } from 'react';

import Title from '../components/Title';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const BubbleVisualizer = () => {
  const [width, height] = useWindowSize();
  return (
    <div className="bubbleVisualizerContainer">
      <iframe title="Meet the Team" className="bubbleVisualizer" src={`misc/bubbles.html?w=${width}&h=${height}`}></iframe>
    </div>
  );
}

export default () => (
  <>
    <Title>Meet the Team:</Title>
    <BubbleVisualizer />
  </>
)