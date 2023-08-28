import { ReactNode, useEffect, useState } from 'react';

async function typeAhead(s: string): Promise<string[]> {
  return fetch('/api/ta_search/' + s).then(async (res) => {
    const locations = await res.json();
    return locations.data
      .filter((c) => c.name.toLowerCase().includes(s.toLowerCase()))
      .map((loc) => loc.name);
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
