const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'oppai',
  description: 'No description necessary',
  aliases: ['boobs', 'opp'],
  async execute(message) {
    const owner = process.env.ownerId;
    if (message.author.id === owner && message.channel.nsfw === true) {
    const { url } = await fetch('https://nekos.life/api/v2/img/boobs')
      .then((res) => res.json());
      const embed = new Discord.MessageEmbed()
        .setTitle('Oppai')
        .setColor('#ff0000')
        .setImage(url)
        .setFooter(`Request by: ${message.author.username} | Powered by nekos.life`, message.author.displayAvatarURL({ size: 32 }))
        .setTimestamp()
      message.channel.send(embed);
    } else if (message.author.id !== owner) { message.reply('Command not allowed');
    } else if (message.channel.nsfw === false) { message.reply('Illegal!');
    } else { return; }
  }
};