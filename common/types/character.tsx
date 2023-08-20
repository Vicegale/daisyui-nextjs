type Character = {
  id: number;
  name: string;
  level: number;
  class: string;
  weapon: {
    name: string;
    damage: number;
  };
};

export default Character;
