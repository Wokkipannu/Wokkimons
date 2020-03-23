const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();
client.spawners = new Discord.Collection();
client.currentMonster = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const config = require('./config');

const ServerController = require('./controllers/ServerController');
const spawner = require('./base/spawner');
const dispatcher = require('./utils/dispatcher');
const Dispatcher = new dispatcher();

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  let servers = await ServerController.getAllServers();
  servers.forEach(server => {
    if (server.spawnChannel) {
      const Spawner = new spawner(Dispatcher, server.serverId, server.spawnChannel);
      Spawner.start();
      client.spawners.set(server.serverId, Spawner);
    }
  });
});

client.on('message', msg => {
  if (!msg.content.startsWith(config.PREFIX) || msg.author.bot) return;

  const args = msg.content.slice(config.PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;
  if (command.guildOnly && message.channel.type !== 'text') return msg.reply('Komento toimii vain servereillä');
  try {
    client.commands.get(command).execute(msg, args);
  }
  catch(error) {
    console.error(error);
    msg.reply('Error when trying to execute command');
  }
});

client.login(config.TOKEN);

client.currentMonster;

Dispatcher.on('spawn', data => {
  client.currentMonster.set(data.serverId, data.monster);

  const guild = client.guilds.cache.find(g => g.id === data.serverId);
  const channel = guild.channels.cache.find(c => c.id === data.channelId);

  const embed = new MessageEmbed()
    .setTitle(`Villi ${data.monster.isShiny ? '⭐ monsteri' : 'monsteri'} ilmestyi!`)
    .setDescription(`Nappaa se kirjoittamalla w!catch <nimi>`)
    .setImage(data.monster.isShiny ? data.monster.shinyImage : data.monster.image);
  
  channel.send(embed);
});