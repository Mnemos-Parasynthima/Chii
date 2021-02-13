const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = class SlapCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'slap',
      aliases: ['slp', 'bofetear'],
      group: 'rp',
      memberName: 'slap',
	    description: 'Slaps someone.',
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  async run(msg) {
    const { url } = await fetch("https://nekos.life/api/v2/img/slap").then((res) => res.json());
		const taggedUser = msg.mentions.users.first();

    if (taggedUser.id === process.env.selfId ) return msg.reply('Why would I slap nyaself, baka-nya!');

    const embed = new Discord.MessageEmbed()
      .setTitle(`Slapping ${taggedUser.username}-nya!`)
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp()
		
		msg.embed(embed);
  }
};