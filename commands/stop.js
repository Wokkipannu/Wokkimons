/**
 * Command Stop
 * 
 * Stop the spawner from spawning monsters
 */

module.exports = {
  name: 'stop',
  description: 'Stop spawner',
  guildOnly: true,
  async execute(msg, args) {
    // If the user does not have the MANAGE_CHANNELS permission
    if (!msg.member.permissions.has('MANAGE_CHANNELS')) return msg.reply('Sinulta puuttuu MANAGE_CHANNELS oikeus');
    // Get the spawner from spawners collection
    let spawner = msg.client.spawners.get(msg.guild.id);
    // If we didn't find a spawner
    if (!spawner) {
      return msg.reply('Spawner ei ole päällä tai sitä ei ole olemassa. Käytä `start` komentoa.');
    }
    // If we found a spawner, but it's already off we'll send a message
    // Otherwise we'll stop it
    if (!spawner.getStatus()) return msg.reply('Spawner on jo pois päältä');
    else {
      spawner.stop();
      msg.reply('Spawner otettiin pois päältä');
    }
  }
}