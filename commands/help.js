/**
 * Command Help
 * 
 * Send a list of commands or help on specific command usage
 */

const Command = require('../base/command');

module.exports = class HelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      guildOnly: false,
      description: 'Apu komento',
      extendedDescription: 'Antaa listan olemassa olevista komennoista tai lisää tietoa yksittäisestä komennosta',
      usage: '<valinnainen komennon nimi>'
    });
  }

  execute(msg, args) {
    if (args.length === 0) {
      let message = '**Wokkimon komennot**\n';
      this.client.commands.forEach(command => {
        if (command.hasPermission(msg)) message += `${command.name} : ${command.description}\n`
      });
      message += `\nKäytä \`${process.env.PREFIX}help <komennon nimi>\` saadaksesi lisää tietoa komennosta`;
      msg.author.send(message);
    }
    else {
      const command = this.client.commands.get(args[0].toLowerCase());
      if (!command) return msg.reply('Antamallasi nimellä ei löytynyt komentoa');
      
      let message = `
**Komento ${command.name}**
**Selite:** ${command.extendedDescription}
**Käyttö:** ${command.usage}
      `;

      msg.author.send(message);
    }

    if (msg.channel.type === 'text') return msg.reply('Komennot lähetetty viestinä');
    else return undefined;
  }
}