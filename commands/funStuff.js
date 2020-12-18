module.exports = {
	name: 'baka',
	description: 'Calls someone baka.',
	execute(message) {
		const taggedUser = message.mentions.users.first();
		
		message.channel.send(`Baka ${taggedUser}-nya`);
	},
};

module.exports = {
	name: 'useless',
	description: 'Calls someone useless.',
	execute(message) {
		const taggedUser = message.mentions.users.first();
		
	message.channel.send(`Useless ${taggedUser}-nya!`);
	},
};
/*
module.exports = {
	name: 'say',
	description: 'Returns what you want it to say.'
	execute(message, args) {
		const words = args[0];
		message.channel.send(words);
	}
}*/