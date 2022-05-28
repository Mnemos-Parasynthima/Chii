const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class HentaiCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'hentai',
      aliases: ['hnt', 'solog', 'slg'],
      group: 'nsfw',
      memberName: 'hentai',
      description: 'No description necessary',
      throttling: {
        usages: 3,
        duration: 1,
      }
    });
  }

  async run(msg) {
    const owner = process.env.ownerId;

    if (msg.author.id !== owner) return msg.reply("Command not allowed");
    if (!msg.channel.nsfw) return msg.reply("Illegal!");
    
    const { url } = await fetch(`https://api.waifu.pics/nsfw/waifu`)
      .then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle('Hentai')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by waifu.pics`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
      
    msg.embed(embed);
  }
};