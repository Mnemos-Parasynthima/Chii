const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class FoxGirlCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'foxgirl',
      aliases: ['fxgrl', 'kitsune'],
      group: 'anime',
      memberName: 'foxgirl',
      description: 'Awooo',
      throttling: {
        usages: 3,
        duration: 3,
      }
    });
  }
  async run(msg) {
    // Gets image data from api and sends as json
	  const { url } = await fetch("https://nekos.life/api/v2/img/fox_girl").then((res) => res.json());
    const embed = new Discord.MessageEmbed()
      .setTitle('Fox Girl')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp()
	  msg.embed(embed);
  }
};