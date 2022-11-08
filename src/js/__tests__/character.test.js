import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('setting up new basic character', () => {
  const character1 = new Character('player1', 'Bowman');
  expect(character1).toEqual({
    name: 'player1', type: 'Bowman', health: 100, level: 1,
  });
});

test('setting up new player', () => {
  const bowman = new Bowman('Nata');
  const daemon = new Daemon('Oleg');
  const magician = new Magician('Magi');
  const swordsman = new Swordsman('Alex');
  const undead = new Undead('Andy');
  const zombie = new Zombie('Ivan');

  expect(bowman).toEqual({
    name: 'Nata', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
  expect(daemon).toEqual({
    name: 'Oleg', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
  expect(magician).toEqual({
    name: 'Magi', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
  expect(swordsman).toEqual({
    name: 'Alex', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
  expect(undead).toEqual({
    name: 'Andy', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
  expect(zombie).toEqual({
    name: 'Ivan', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('should return wrong name error', () => {
  expect(() => {
    const wrongName = new Character('b', 'Bowman');
    return wrongName;
  }).toThrowError('Имя должно содержать от 2 до 10 букв!');
});

test('should return wrong type error', () => {
  expect(() => {
    const wrongType = new Character('MagicPlayer', 'Magicn');
    return wrongType;
  }).toThrow(Error);
});

test('should level up player', () => {
  const swordsman = new Swordsman('Lancelot');
  swordsman.health = 50;
  swordsman.levelUp();
  expect(swordsman.health).toBe(100);
  expect(swordsman.attack).toBe(48);
  expect(swordsman.defence).toBe(12);
  expect(swordsman.level).toBe(2);
});

test('should return error message for levelUp', () => {
  expect(() => {
    const bowman = new Bowman('Bob');
    bowman.health = 0;
    return bowman.levelUp();
  }).toThrowError('Нельзя повысить левел умершего!');
});

test('should downgrade health after damage', () => {
  const zombie = new Zombie('Zuzu');
  zombie.damage(20);
  expect(zombie.health).toBe(82);
});
