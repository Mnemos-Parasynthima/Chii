const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class NekosCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'nekos',
      aliases: ['nya', 'catgirls', 'neko', 'nekomimi'],
      group: 'anime',
      memberName: 'nekos',
      description: 'NYA!!!',
      throttling: {
        usages: 3,
        duration: 3,
      }
    });
  }

  async run(msg) {
	  const { url } = await fetch("https://api.waifu.pics/sfw/neko").then((res) => res.json());
    const embed = new MessageEmbed()
      .setTitle('Nekos!')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by waifu.pics`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
      
	  msg.embed(embed);
  }
};