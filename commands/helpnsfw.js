const prefix = process.env.prefix;
const Discord = require('discord.js');

module.exports = {
	name: 'nhelp',
	description: 'List all of my NSFW commands or info about a specific NSFW command.',
	aliases: ['ncommands'],
	usage: '<command name>',
	cooldown: 5,
	execute(message, args) {
		//const data = [];
    const embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setThumbnail(message.client.user.displayAvatarURL())
      .setTimestamp()
		const { commands } = message.client;

		if (!args.length) {
      embed.setTitle('SoulWorker Chii\'s Commands')
        .setDescription('Nya! NSFW commands')
        .setFooter(`Send \`${prefix} help [command name]\` for more info onya a command-nya!`)
        .addFields(
          {
            name: 'NSFW',
            value: `\`cum\`, \`hentai\`, \`hgif\`, \`nsfwngif\`, \`nsfwn\`, \`oppai\`, \`clit\``
          },
        )

			return message.channel.send(embed)
				.then(() => {
					if (message.channel.type === 'text') return;
				})
				.catch(error => {
					console.error(`Could not send help to ${message.author.tag}.\n`, error);
					message.reply('It seems like I can\'t send!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

    embed.setTitle(`Chii's \`${command.name}\` command help`)
      .setDescription(`**Parameters:** \`<> - required; [] - optional\` \n\n${command.description}\n **Aliases:** ${command.aliases.join(', ')}\n**Cooldown:** ${command.cooldown || 3} second(s)`);
		message.channel.send(embed);
	},
};
