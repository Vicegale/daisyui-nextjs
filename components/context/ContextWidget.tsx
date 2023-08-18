import { useState, createContext } from 'react';

const ContextWidget = () => {
  const [color, setColor] = useState('red');
  const ColorContext = createContext(null);
  return <></>;
};

export default ContextWidget;
