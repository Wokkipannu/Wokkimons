const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();
client.spawners = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const config = require('./config');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(config.PREFIX) || msg.author.bot) return;

  const args = msg.content.slice(config.PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;
  try {
    client.commands.get(command).execute(msg, args);
  }
  catch(error) {
    console.error(error);
    msg.reply('Invalid command');
  }
});

client.login(config.TOKEN);

client.currentMonster;

const dispatcher = require('./utils/dispatcher');
const Dispatcher = new dispatcher();
const spawner = require('./base/spawner');
const Spawner = new spawner(Dispatcher);
Spawner.start();
Dispatcher.on('spawn', (monster) => {
  client.currentMonster = monster;

  const guild = client.guilds.cache.find(g => g.id === '534773820091793408');
  const channel = guild.channels.cache.find(c => c.id === '689819288210505806');

  const embed = new MessageEmbed()
    .setTitle(`Villi ${monster.isShiny ? '⭐ monsteri' : 'monsteri'} ilmestyi!`)
    .setDescription(`Nappaa se kirjoittamalla w!catch <nimi>`)
    .setImage(monster.isShiny ? monster.shinyImage : monster.image);
  
  channel.send(embed);
});