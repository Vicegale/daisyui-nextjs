import { useState, createContext, useContext  } from 'react';

const ColorContext = createContext(null);
const ContextWidget = () => {
  const [word, setWord] = useState('wild');
  return (
    <>
      <div>
        <ColorContext.Provider value={word}>
          <Child/>
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
  )
}
export default ContextWidget;
