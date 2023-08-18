import { useState, createContext, useContext  } from 'react';

const ColorContext = createContext(null);
const ContextWidget = () => {
  const [word, setWord] = useState('wild');
  return (
    <>
      <div>
        <ColorContext.Provider value={word}>
          <Child/>
        </ColorContext>
      </div>
    </>
  );
};

const Child = () => {
  const ctx = useContext(ColorContext);
  return (
    <div>
      <p>{ctx}</p>
      </div>
  )
}
export default ContextWidget;
