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
		this.client.emit('guildMemberAdd', msg.member);
  }
};