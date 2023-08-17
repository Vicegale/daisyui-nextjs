import { useState } from 'react';

type Message = {
  message: string;
};
const arr = [
  'abandoned',
  'able',
  'absolute',
  'adorable',
  'adventurous',
  'academic',
  'acceptable',
  'acclaimed',
  'accomplished',
  'accurate',
  'aching',
  'acidic',
  'acrobatic',
  'active',
  'actual',
  'adept',
  'admirable',
  'admired',
  'adolescent',
  'adorable',
  'adored',
  'advanced',
  'afraid',
  'affectionate',
  'aged',
  'aggravating',
  'aggressive',
  'agile',
  'agitated',
  'agonizing',
  'agreeable',
  'ajar',
  'alarmed',
  'alarming',
  'alert',
  'alienated',
  'alive',
  'all',
  'altruistic',
  'amazing',
  'ambitious',
  'ample',
  'amused',
  'amusing',
  'anchored',
  'ancient',
  'angelic',
  'angry',
  'anguished',
  'animated',
  'annual',
  'another',
  'antique',
  'anxious',
  'any',
  'apprehensive',
  'appropriate',
  'apt',
  'arctic',
  'arid',
  'aromatic',
  'artistic',
  'ashamed',
  'assured',
  'astonishing',
  'athletic',
  'attached',
  'attentive',
  'attractive',
  'austere',
  'authentic',
  'authorized',
  'automatic',
  'avaricious',
  'average',
  'aware',
  'awesome',
  'awful',
  'awkward',
  'babyish',
  'bad',
  'back',
  'baggy',
  'bare',
  'barren',
  'basic',
  'beautiful',
  'belated',
  'beloved',
  'beneficial',
  'better',
  'best',
  'bewitched',
  'big',
  'bighearted',
  'biodegradable',
  'bitesized',
  'bitter',
  'black',
];

const Logger = () => {
  const [log, setLog] = useState<Message[]>([]);
  const addLog = () => {
    setLog([...log, { message: arr[Math.floor(Math.random() * arr.length)] }]);
  };
  const resetLog = () => {
    setLog([]);
  };
  return (
    <>
      <div className="w-96 m-4 p-2 border-solid border-2 border-primary rounded-lg">
        <div className="flex flex-row space-x-1">
          <button className="w-1/2 btn btn-primary" onClick={addLog}>
            Add
          </button>
          <button className="w-1/2 btn btn-primary" onClick={resetLog}>
            Reset
          </button>
        </div>
        <div className="flex flex-col space-y-1 mt-1">
          {log.map((s) => (
            <div className="rounded-md text-center hover:bg-secondary active:bg-accent">
              <p>{s.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Logger;
