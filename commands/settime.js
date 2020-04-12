/**
 * Command Settime
 * 
 * Change the time interval to the next spawn
 */

const Command = require('../base/command');

module.exports = class SetTimeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'settime',
      guildOnly: true,
      description: 'Muuttaa spawnerin ajastimen',
      extendedDescription: 'Muuttaa spawnerin ajastimen short = 1-5m, medium = 5-15m, long = 15-30m',
      usage: '<short/medium/long>',
      permissions: 'owner'
    });
  }

  execute(msg, args) {
    // If user is not Wokki#0001
    if (msg.author.id !== '108299947257925632') return;
    // Interval argument
    const interval = args[0];
    // Find the spawner
    let spawner = this.client.spawners.get(msg.guild.id);
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