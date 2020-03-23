const PlayerController = require('./controllers/PlayerController');
const MonsterController = require('./controllers/MonsterController');
const Monsters = require('./monsters/monsters');
const Players = require('./players');

Players.forEach(async player => {
  let ply = await PlayerController.createPlayer(player.id);
  ply.color = player.color;
  ply.save();
  console.log(`Created new player with ID ${ply.id}`);

  let newMonsters = [];
  player.monsters.forEach(monster => {
    let m = Monsters.allMonsters.find(mon => mon.name === monster.name);
    newMonsters.push({ monsterId: m.id, level: monster.level, isShiny: monster.isShiny ? 1 : 0, PlayerId: ply.id });
  });
  console.log(`Player has ${newMonsters.length} monsters`);

  newMonsters.forEach(async mo => {
    await MonsterController.createMonster(mo);
  });
});