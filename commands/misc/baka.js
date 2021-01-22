module.exports =  {
	name: 'baka',
	description: 'Calls someone baka.',
  usage: '<@member>',
  aliases: ['baka'],
	execute(message) {
		const taggedUser = message.mentions.users.first();
		
		message.channel.send(`Baka ${taggedUser}-nya`);
	}
};