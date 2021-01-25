const { Command } = require('discord.js-commando');

module.exports = class UselessCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'useless',
      aliases: ['usls'],
      group: 'misc',
      memberName: 'useless',
	    description: 'Calls someone useless if name provided.',
      guildOnly: true,
      format: '[@member]',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
		const taggedUser = msg.mentions.users.first();
    const owner = this.client.owner;
		
    if (!taggedUser) { 
      msg.say('Everyone\'s useless! Except for my Master-nya');
    }

    if (taggedUser && taggedUser.id !== owner) {
	    msg.say(`Useless ${taggedUser}-nya!`);
    } else {
      msg.reply('No u!');
    }
  }
};