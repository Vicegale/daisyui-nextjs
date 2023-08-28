import Character from 'common/types/character';
import { ReactNode, useEffect, useState } from 'react';

async function typeAhead(s: string): Promise<string[]> {
  return fetch('/api/characters').then(async (res) => {
    const chars: Character[] = await res.json();
    return chars
      .map((c) => c.name.toLowerCase())
      .filter((c) => c.includes(s.toLowerCase()));
  });
}

const TripAdvisorSearch = () => {
  const [input, setInput] = useState('');
  const [chars, setChars] = useState([]);

  useEffect(() => {
    if (input.length >= 3) {
      typeAhead(input).then((c: string[]) => {
        setChars(c);
      });
    } else {
      setChars([]);
    }
  }, [input]);

  return (
    <div className="w-96 m-4 p-2 border-solid border-2 border-primary rounded-md">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        {chars.map((x) => (
          <div className="rounded-md text-center hover:bg-secondary active:bg-accent">
            <p>{x}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripAdvisorSearch;
