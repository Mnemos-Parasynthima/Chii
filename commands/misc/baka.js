const { Command } = require('discord.js-commando');

module.exports = class BakaCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'baka',
      aliases: ['bk'],
      group: 'misc',
      memberName: 'baka',
	    description: 'Calls someone baka.',
      guildOnly: true,
      format: '<@member>',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
		const taggedUser = msg.mentions.users.first();
		
		msg.say(`Baka ${taggedUser}-nya`);
  }
};