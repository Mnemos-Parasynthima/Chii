const { Command } = require('discord.js-commando');

module.exports = class KickCommand extends Command {
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
		if (!msg.mentions.users.size) return msg.reply('Nya need to tag a user in order to kick them-nya!');

		const taggedUser = msg.mentions.users.first();

    if (!taggedUser) return;

    const user = msg.guild.member(taggedUser);

    if (!user) return;

    user.kick()
      .then(() => { msg.reply('Successfully kicked 🦵🏼!')})
      .catch(err => { 
        console.error(err);
        msg.say(`There was an error trying to kick ${user} in this channyel!`);
      });    
  }
};