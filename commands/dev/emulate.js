const { Command } = require('discord.js-commando');

module.exports = class EmulateCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'emulate',
      aliases: ['emlt', 'simulate', 'sim'],
      group: 'mod',
      memberName: 'emulate',
	    description: 'Emulates an event.',
      guildOnly: true
    });
  }

  run(msg) {
    if (msg.author.id !== process.env.ownerId) return msg.reply('Nya are not allowed to run that command, only for Developers!');
    
    this.client.emit('guildMemberAdd', msg.member);
  }
};