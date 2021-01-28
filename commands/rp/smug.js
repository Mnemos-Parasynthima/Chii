const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = class SmugCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'smug',
      aliases: ['smg'],
      group: 'rp',
      memberName: 'smug',
	    description: 'A nice smug.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  async run(msg) {
    const { url } = await fetch("https://nekos.life/api/v2/img/smug").then((res) => res.json());
    const embed = new Discord.MessageEmbed()
      .setTitle('A nice smug')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp()
		
		msg.embed(embed);
  }
};