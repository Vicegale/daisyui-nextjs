import { useState, useContext } from 'react';
import ColorContext from './ColorContext';

const ContextWidget = () => {
  const [color, setColor] = useState('green');
  return (
    <>
      <div>
        <ColorContext.Provider value={color}>
          <Child />
        </ColorContext.Provider>
      </div>
    </>
  );
};

const Child = () => {
  const ctx = useContext(ColorContext);
  return (
    <div className="w-96 m-4 p-2 border-2 border-primary rounded-lg">
      <p>Context says: {ctx}</p>
    </div>
  );
};
export default ContextWidget;
