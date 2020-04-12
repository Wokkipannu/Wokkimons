/**
 * Class Command
 */

const Groups = require('../groups');

class Command {
  constructor(client, info) {
    this.client = client;
    this.name = info.name;
    this.description = info.description;
    this.extendedDescription = info.extendedDescription;
    this.guildOnly = info.guildOnly;
    this.permissions = info.permissions;
    this.usage = info.usage;
  }

  hasPermission(msg) {
    if (this.permissions && !Groups[this.permissions].find(author => author.id === msg.author.id)) return false;
    else return true;
  }

  canRun(msg) {
    if (this.guildOnly && msg.channel.type !== 'text') return msg.reply('Komento toimii vain servereillä');
  }
}

module.exports = Command;