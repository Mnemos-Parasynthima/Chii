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
    if (msg.member.roles.cache.some(role => role.name === 'Developer')) {
      this.client.emit('guildMemberAdd', msg.member);
    } else {
      msg.reply('Nya are not allowed to run that command, only for Developers!');
    }
  }
};