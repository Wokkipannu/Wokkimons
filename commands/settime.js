/**
 * Command Settime
 * 
 * Change the time interval to the next spawn
 */

module.exports = {
  name: 'settime',
  description: 'Change spawn timer',
  guildOnly: true,
  execute(msg, args) {
    // Interval argument
    const interval = args[0];
    // Find the spawner
    let spawner = msg.client.spawners.get(msg.guild.id);
    if (!spawner) return msg.reply('Spawner ei ole päällä');
    // Define times for short, medium and long
    let timer;
    if (interval === 'short') {
      // Set the time from 1-5 minutes
      timer = Math.floor(Math.random() * (300000 - 60000 + 1) + 60000);
    }
    else if (interval === 'medium') {
      // Set the time from 5-15 minutes
      timer = Math.floor(Math.random() * (900000 - 300000 + 1) + 300000);
    }
    else if (interval === 'long') {
      // Set the time from 15-30 minutes
      timer = Math.floor(Math.random() * (1800000 - 900000 + 1) + 900000);
    }
    else {
      return msg.reply('Oikea muoto on `settime <short/medium/long>`');
    }
    // Set the timer, stop and star the timer
    spawner.timer = timer;
    spawner.stop();
    spawner.start();

    msg.reply(`Spawnerin aika muutettu`);
  }
}