const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
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
        .setDescription('I am SoulWorker Chii Aruel, one of the best SoulWorkers from West Cloudreamnya. Nya only Master is Umbre0n-sama, but I suppose I\'ll accept your commands-nya. UwU')
        .setFooter(`Send \`${prefix} help [command name]\` for more info onya a command-nya!`)
        .addFields(
          {
            name: 'Moderation',
            value: `\`help\`, \`kick\`, \`server\`, \`slash\`, \`user-info\``
          },
          {
            name: 'Fun',
            value: `\`avatar\`, \`bday\`, \`fate\`, \`holiday\`, \`praise\`, \`say\`, \`shocked\``
          },
          {
            name: 'Anime',
            value: `\`anime\`, \`nekos\`` // More to come
          },
          {
            name: 'Miscelleanous',
            value: `\`baka\`, \`fight\`, \`hiss\`, \`souldreg\`, \`useless\``
          }
        )
			//data.push('Here\'s a list of all my commands-nya:');
			//data.push(commands.map(command => command.name).join(', '));
			//data.push(`\nNya can send \`${prefix} help [command name]\` to get info onya a specific command-nya!`);

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

		//data.push(`**Name:** \`${command.name}\``);

		//if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		//if (command.description) data.push(`**Description:** ${command.description}`);
		//if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		//data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
    embed.setTitle(`Chii's \`${command.name}\` command help`)
      .setDescription(`**Parameters:** \`<> - required; [] - optional\` \n\n${command.description}\n **Aliases:** ${command.aliases.join(', ')}\n **Usage:** \`${prefix} ${command.name} ${command.usage || ''}\`\n**Cooldown:** ${command.cooldown || 3} second(s)`);
		message.channel.send(embed);
	},
};
