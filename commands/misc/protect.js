const { Command } = require('discord.js-commando');

module.exports = class ProtectCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'protect',
      aliases: ['prtct', 'prt'],
      group: 'misc',
      memberName: 'protect',
      description: 'Protects owner of Chii',
      guildOnly: true,
      throttling: {
        usages: 5,
        duration: 5,
      }
    });
  }

  run(msg) {
    const owner = this.client.owner;
    if (msg.author.id !== owner) {
      msg.reply('You\'re not my love and my Master-nya!');
    } else if (msg.author.id === owner) {
      msg.say('Stop bullying my master-nya! I\'ll fight you!');
    } else {
      return;
    }
  }
};