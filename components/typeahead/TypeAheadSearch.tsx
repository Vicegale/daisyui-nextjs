import { ReactNode, useState } from 'react';
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

function typeAhead(s: string): ReactNode {
  if (s.length >= 3) {
    const filtered = arr.filter((x) => x.includes(s));
    if (filtered.length != 0) {
      return filtered.map((x) => (
        <div className="rounded-md text-center hover:bg-secondary active:bg-accent">
          <p>{x}</p>
        </div>
      ));
    } else {
      return (
        <div className="rounded-md text-center hover:bg-secondary active:bg-accent">
          <p>Not found</p>
        </div>
      );
    }
  } else {
  }
}
const TypeAheadSearch = () => {
  const [input, setInput] = useState('');
  return (
    <div className="w-96 m-4 p-2 border-solid border-2 border-primary rounded-md">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
      />
      <div>{typeAhead(input)}</div>
    </div>
  );
};

export default TypeAheadSearch;
