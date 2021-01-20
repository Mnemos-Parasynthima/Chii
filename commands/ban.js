module.exports = {
	name: 'ban',
	description: 'Tag a member and bans them.',
  usage: '<@member>',
  aliases: [''],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('Nya need to tag a user in order to ban them-nya!');
		}

    // this returns the user mentioned in the message
		const taggedUser = message.mentions.users.first();

    if (taggedUser) {
      // this gets the member from the user
      const user = message.guild.member(taggedUser);
      if (user) {
        user.ban()
          .then(() => { message.reply('Successfully banned.' )})
          .catch(err => { 
            console.error(err);
			      message.channel.send(`There was an error trying to ban ${user} in this channel!`);
          });
      }
    }
  }
};
