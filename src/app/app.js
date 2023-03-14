const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function getSuperAttack(obj) {
  const resultArray = [];

  obj.special.forEach((el) => { 
    if (el?.description) {
      resultArray.push(el);
    } else {
      resultArray.push(el);
      resultArray[resultArray.length - 1].description = 'Описание не доступно';
    }
  });

  return resultArray;
}

// console.log(