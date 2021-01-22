const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'nekos',
  description: 'NYA!!',
  aliases: ['nya', 'catgirls', 'neko'],
  async execute(message) {
	  const { url } = await fetch("https://nekos.life/api/v2/img/neko").then((res) => res.json());
    const embed = new Discord.MessageEmbed()
      .setTitle('Nekos')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${message.author.username} | Powered by nekos.life`, message.author.displayAvatarURL({ size: 32 }))
      .setTimestamp()
	  message.channel.send(embed);
  }
}