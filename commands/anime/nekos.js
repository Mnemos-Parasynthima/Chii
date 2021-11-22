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
    // Gets image data from api and sends as json
	  const { url } = await fetch("https://nekos.life/api/v2/img/neko").then((res) => res.json());
    const embed = new MessageEmbed()
      .setTitle('Nekos')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
      
	  msg.embed(embed);
  }
};