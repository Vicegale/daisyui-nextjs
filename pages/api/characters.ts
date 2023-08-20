import { NextApiRequest, NextApiResponse } from 'next';

type Character = {
  name: string;
  level: number;
  weapon: {
    name: string;
    damage: number;
  };
};

const chars: Character[] = [
  {
    name: 'Eldric',
    level: 35,
    weapon: {
      name: 'Sword of Flames',
      damage: 120,
    },
  },
  {
    name: 'Lyanna',
    level: 42,
    weapon: {
      name: 'Bow of the Moon',
      damage: 110,
    },
  },
  {
    name: 'Grommash',
    level: 50,
    weapon: {
      name: 'Axe of Thunder',
      damage: 150,
    },
  },
  {
    name: 'Fiona',
    level: 28,
    weapon: {
      name: 'Staff of Serenity',
      damage: 80,
    },
  },
];

export default function characters(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json(chars);
}
