const { Command } = require('discord.js-commando');

module.exports = class BanCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'ban',
      aliases: ['hammerban', 'banhammer', 'bn', 'bnhmr'],
      group: 'mod',
      memberName: 'ban',
	    description: 'Tag a member and bans them.',
      guildOnly: true,
      userPermissions: ['BAN_MEMBERS'],
      format: '<@member>',
      throttling: {
        usages: 1,
        duration: 10,
      }
    });
  }
  run(msg) {
		if (!msg.mentions.users.size) {
			return msg.reply('Nya need to tag a user in order to ban them-nya!');
		}

    // this returns the user mentioned in the message
		const taggedUser = msg.mentions.users.first();

    if (taggedUser) {
      // this gets the member from the user
      const user = msg.guild.member(taggedUser);
      if (user) {
        user.ban()
          .then(() => { msg.reply('Successfully banned.')})
          .catch(err => { 
            console.error(err);
			      msg.say(`There was an error trying to ban ${user} in this channel!`);
          });
      }
    }
  }
};