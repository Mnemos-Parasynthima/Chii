module.exports = {
	name: 'useless',
	description: 'Calls someone useless.',
	execute(message) {
		const taggedUser = message.mentions.users.first();
		
	message.channel.send(`Useless ${taggedUser}-nya!`);
	}
};