module.exports = {
  name: 'hint',
  description: 'Get hint on monsters name',
  guildOnly: true,
  execute(msg, args) {
    const currentMonster = msg.client.currentMonster;

    if (!currentMonster) return msg.reply('Odota seuraavaa monsteria');

    let hint = "";

    for (let i = 0; i < currentMonster.name.length; i++) {
      let rand = Math.floor(Math.random() * (3 - 1) + 1)
      if (rand === 1) {
        hint += '_'
      }
      else {
        hint += currentMonster.name[i]
      }
    }
    
    msg.reply(`Vinkki: \`${hint}\``);
  }
}