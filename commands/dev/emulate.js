const { Command } = require('discord.js-commando');
// import pkg2 from 'discord.js-commando';
// const { Command } = pkg2;

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
    if (msg.author.id === process.env.ownerId) {
      this.client.emit('guildMemberAdd', msg.member);
    } else {
      msg.reply('Nya are not allowed to run that command, only for Developers!');
    }
  }
};