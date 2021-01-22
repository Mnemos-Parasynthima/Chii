module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
  usage: '<@member>',
  aliases: ['k', 'kck'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('Nya need to tag a user in order to kick them-nya!');
		}

    // this returns the user mentioned in the message
		const taggedUser = message.mentions.users.first();

    if (taggedUser) {
      // this gets the member from the user
      const user = message.guild.member(taggedUser);
      if (user) {
        user.kick()
          .then(() => { message.reply('Successfully kicked.' )})
          .catch(err => { 
            console.error(err);
			      message.channel.send(`there was an error trying to kick ${user} in this channel!`);
          });
      }
    }
  }
};
