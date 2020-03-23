module.exports = {
  name: 'stop',
  description: 'Stop spawner',
  guildOnly: true,
  async execute(msg, args) {
    if (!msg.member.permissions.has('MANAGE_CHANNELS')) return msg.reply('Sinulta puuttuu MANAGE_CHANNELS oikeus');

    let spawner = msg.client.spawners.get(msg.guild.id);
    if (!spawner) {
      return msg.reply('Spawner ei ole päällä tai sitä ei ole olemassa. Käytä `start` komentoa.');
    }

    if (!spawner.getStatus()) return msg.reply('Spawner on jo pois päältä');
    else {
      spawner.stop();
      msg.reply('Spawner otettiin pois päältä');
    }
  }
}