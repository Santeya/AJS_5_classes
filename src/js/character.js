export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 букв!');
    }
    if (!types.includes(type)) {
      throw new Error('Задан неверный тип персонажа!');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего!');
    }
    this.level += 1;
    this.attack += 0.2 * this.attack;
    this.defence += 0.2 * this.defence;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      this.health = 0;
    }
  }
}
