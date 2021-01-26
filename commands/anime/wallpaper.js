const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class WallpaperCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'wallpaper',
      aliases: ['wllppr', 'wall'],
      group: 'anime',
      ownerOnly: true,
      memberName: 'wallpaper',
      description: 'Awooo',
      throttling: {
        usages: 3,
        duration: 3,
      }
    });
  }
  async run(msg) {
    // Gets image data from api and sends as json
	  const { url } = await fetch("https://nekos.life/api/v2/img/smug").then((res) => res.json());
    const embed = new Discord.MessageEmbed()
      .setTitle('Neko GIF')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp()
	  msg.embed(embed);
  }
};