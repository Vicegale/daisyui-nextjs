import { ReactNode, useEffect, useRef, useState } from 'react';

const controller = new AbortController();
const signal = controller.signal;

async function typeAhead(s: string, signal: AbortSignal): Promise<string[]> {
  return fetch('/api/ta_search/' + s, { signal: signal }).then(async (res) => {
    const locations = await res.json();
    return locations.data.filter((c) =>
      c.name.toLowerCase().includes(s.toLowerCase())
    );
  });
}

const TripAdvisorSearch = () => {
  const [input, setInput] = useState('');
  const [locations, setLocations] = useState([]);
  const abortController = useRef(new AbortController());

  useEffect(() => {
    if (input.length >= 3) {
      abortController.current.abort();
      abortController.current = new AbortController();
      typeAhead(input, abortController.current.signal).then((c: string[]) => {
        setLocations(c);
      });
    } else {
      setLocations([]);
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
        {locations.map((x) => (
          <div className="rounded-md text-center hover:bg-secondary active:bg-accent">
            <p>{x}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripAdvisorSearch;
