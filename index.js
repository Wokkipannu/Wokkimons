/**
 * Wokkimons
 * 
 * A monster collecting game in Discord
 */

require('dotenv').config()

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const winston = require('./utils/logger');

client.commands = new Discord.Collection();
client.spawners = new Discord.Collection();
client.currentMonster = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  try {
    const cmd = new command(client);
    client.commands.set(cmd.name, cmd);
  }
  catch(error) {
    winston.error(`Setting command ${file} failed`, error);
  }
}

const ServerController = require('./controllers/ServerController');
const spawner = require('./base/spawner');
const dispatcher = require('./utils/dispatcher');
client.Dispatcher = new dispatcher();

client.on('ready', async () => {
  winston.info(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`on ${client.guilds.cache.size} servers`, { type: 'PLAYING' });
  // Find all servers and create monster spawner for all of them
  let servers = await ServerController.getAllServers();
  servers.forEach(server => {
    if (server.spawnChannel && server.spawnerStatus === 1) {
      const Spawner = new spawner(client.Dispatcher, server.serverId, server.spawnChannel);
      Spawner.init();
      Spawner.start();
      client.spawners.set(server.serverId, Spawner);
    }
  });
});
// Handle messages
client.on('message', msg => {
  if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

  const args = msg.content.slice(process.env.PREFIX.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);
  if (!command) return;
  args.length > 0 ?
    winston.info(`User ${msg.author.tag} ran command ${commandName} with args ${args.join(", ")}`) :
    winston.info(`User ${msg.author.tag} ran command ${commandName}`);

  try {
    if (!command.hasPermission(msg)) return msg.reply('Sinulla ei ole tarvittavia oikeuksia suorittaa tätä komentoa');
    command.canRun(msg);
    command.execute(msg, args);
  }
  catch(error) {
    winston.error(error);
    msg.reply('Komentoa suorittaessa tapahtui virhe');
  }
});
client.on('error', winston.error);
client.on('guildCreate', () => client.user.setActivity(`on ${client.guilds.cache.size} servers`, { type: 'PLAYING' }));
client.on('guildDelete', () => client.user.setActivity(`on ${client.guilds.cache.size} servers`, { type: 'PLAYING' }));

client.login(process.env.TOKEN);

client.currentMonster;
// On spawn handles sending the monster spawns to the servers
client.Dispatcher.on('spawn', data => {
  client.currentMonster.set(data.serverId, data.monster);

  const guild = client.guilds.cache.find(g => g.id === data.serverId);
  const channel = guild.channels.cache.find(c => c.id === data.channelId);

  winston.info(`Dispatcher on spawn g:${guild.name} c:${channel.name} m:${data.monster.name}`);

  let color;
  if (data.monster.rarity === 1) color = process.env.COMMON_COLOR;
  else if (data.monster.rarity === 2) color = process.env.UNCOMMON_COLOR;
  else if (data.monster.rarity === 3) color = process.env.RARE_COLOR;
  else color = process.env.COMMON_COLOR;

  const embed = new MessageEmbed()
    .setColor(color)
    .setTitle(`Villi ${data.monster.isShiny ? '⭐ monsteri' : 'monsteri'} ilmestyi!`)
    .setDescription(`Nappaa se kirjoittamalla w!catch <nimi>`)
    .setImage(data.monster.isShiny ? data.monster.shinyImage : data.monster.image);
  
  channel.send(embed)
    .then(() => {
      winston.info(`Monster embed sent to channel`);
    })
    .catch((error) => {
      winston.error(error);
    });
});

// Start cron
const cron = require('./utils/cron');
cron.start(client);