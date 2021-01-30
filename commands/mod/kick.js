const { Command } = require('discord.js-commando');
module.exports = class NameCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'kick',
      aliases: ['k', 'kck'],
      group: 'mod',
      memberName: 'kick',
	    description: 'Tag a member and kick them.',
      guildOnly: true,
      userPermissions: ['KICK_MEMBERS'],
      format: '<member>',
      throttling: {
        usages: 1,
        duration: 10,
      }
    });
  }
  run(msg) {
		if (!msg.mentions.users.size) {
			return msg.reply('Nya need to tag a user in order to kick them-nya!');
		}

    // this returns the user mentioned in the message
		const taggedUser = msg.mentions.users.first();

    if (taggedUser) {
      // this gets the member from the user
      const user = msg.guild.member(taggedUser);
      if (user) {
        user.kick()
          .then(() => { msg.reply('Successfully kicked.')})
          .catch(err => { 
            console.error(err);
			      msg.say(`there was an error trying to kick ${user} in this channel!`);
          });
      }
    }
  }
};