module.exports =  {
	name: 'baka',
	description: 'Calls someone baka.',
	execute(message) {
		const taggedUser = message.mentions.users.first();
		
		message.channel.send(`Baka ${taggedUser}-nya`);
	}
};