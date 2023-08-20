import { NextApiRequest, NextApiResponse } from 'next';
import { type Character } from '/common/types/character';

const chars: Character[] = [
  {
    "id": 1,
    "name": "Eldric",
    "level": 35,
    "class": "Warrior",
    "weapon": {
      "name": "Sword of Flames",
      "damage": 120
    }
  },
  {
    "id": 2,
    "name": "Lyanna",
    "level": 42,
    "class": "Archer",
    "weapon": {
      "name": "Bow of the Moon",
      "damage": 110
    }
  },
  {
    "id": 3,
    "name": "Grommash",
    "level": 50,
    "class": "Barbarian",
    "weapon": {
      "name": "Axe of Thunder",
      "damage": 150
    }
  },
  {
    "id": 4,
    "name": "Fiona",
    "level": 28,
    "class": "Mage",
    "weapon": {
      "name": "Staff of Serenity",
      "damage": 80
    }
  },
  {
    "id": 5,
    "name": "Alistair",
    "level": 38,
    "class": "Paladin",
    "weapon": {
      "name": "Hammer of Justice",
      "damage": 130
    }
  },
  {
    "id": 6,
    "name": "Selene",
    "level": 45,
    "class": "Rogue",
    "weapon": {
      "name": "Dagger of Shadows",
      "damage": 100
    }
  },
  {
    "id": 7,
    "name": "Tharok",
    "level": 55,
    "class": "Berserker",
    "weapon": {
      "name": "Great Axe of Carnage",
      "damage": 160
    }
  },
  {
    "id": 8,
    "name": "Elowen",
    "level": 30,
    "class": "Druid",
    "weapon": {
      "name": "Nature's Staff",
      "damage": 90
    }
  },
  {
    "id": 9,
    "name": "Darian",
    "level": 47,
    "class": "Sorcerer",
    "weapon": {
      "name": "Wand of Arcane Power",
      "damage": 105
    }
  },
  {
    "id": 10,
    "name": "Kaldor",
    "level": 33,
    "class": "Knight",
    "weapon": {
      "name": "Lance of Honor",
      "damage": 115
    }
  }
]

export default function characters(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json(chars);
}
