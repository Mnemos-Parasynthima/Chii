module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('Nya need to tag a user in order to kick them-nya!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`Nya wanted to kick: ${taggedUser}`);
	},
};