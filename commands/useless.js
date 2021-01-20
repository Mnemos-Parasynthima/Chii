module.exports = {
	name: 'useless',
	description: 'Calls someone useless if name provided.',
  usage: '[@member]',
  aliases: [''],
	execute(message) {
		const taggedUser = message.mentions.users.first();
    const owner = process.env.ownerId;
		
    if (!taggedUser) { 
      message.channel.send('Everyone\'s useless! Except for my Master-nya');
    }

    if (taggedUser && taggedUser.user.id !== owner) {
	    message.channel.send(`Useless ${taggedUser}-nya!`);
    } else {
      message.reply('No u!');
    }
	}
};