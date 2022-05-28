const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
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
    const { url } = await fetch("https://api.waifu.pics/sfw/smug").then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle('A nice smug')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by waifu.pics`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
		
		msg.embed(embed);
  }
};