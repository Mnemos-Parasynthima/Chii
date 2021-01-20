const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'nsfwn',
  description: 'NYA!!',
  aliases: ['nsfw'],
  async execute(message) {
    const ownerId = process.env.ownerId;
    if (message.author.id === ownerId) {
    const { url } = await fetch(`https://nekos.life/api/v2/img/${message.channel.nsfw ? "nsfw_" : ""}avatar`)
      .then((res) => res.json());
      const embed = new Discord.MessageEmbed()
        .setTitle(`${message.channel.nsfw ? "NSFW " : ""} Nekos`)
        .setColor('#ff0000')
        .setImage(url)
        .setFooter(`Request by: ${message.author.username} | Powered by nekos.life`, message.author.displayAvatarURL({ size: 32 }))
        .setTimestamp()
      message.channel.send(embed);
    } else {
      message.reply('You do not have the permissions-nya!');
    }
  }
}