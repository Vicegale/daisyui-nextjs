import { useEffect, useState } from 'react';
import { Character } from '/common/types/character';
import CharacterBadge from './CharacterBadge';

const CharacterPicker = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const chars: Promise<Response> = fetch('/api/characters');
    chars.then(async (response) => {
      console.log('Done!');
      const j = await response.json();
      setCharacters(j);
    });
  }, []);
  return (
    <>
      <div className="flex flex-row flex-wrap w-96 m-4 p-2 border-solid border-2 border-primary rounded-md">
        {characters.map((c, i) => (
          <CharacterBadge className="mb-2 w-1/4" key={i} character={c} />
        ))}
      </div>
    </>
  );
};

export default CharacterPicker;
