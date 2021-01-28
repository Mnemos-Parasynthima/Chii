const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class KemonomimiCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'kemonomimi',
      aliases: ['kmnmm', 'kemono', 'kmn'],
      group: 'anime',
      memberName: 'kemonomimi',
      description: 'Sends kemonomimi pictures',
      throttling: {
        usages: 3,
        duration: 3,
      }
    });
  }
  async run(msg) {
    // Gets image data from api and sends as json
	  const { url } = await fetch("https://nekos.life/api/v2/img/kemonomimi").then((res) => res.json());
    const embed = new Discord.MessageEmbed()
      .setTitle('kemonomimi')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp()
	  msg.embed(embed);
  }
};