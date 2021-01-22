const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp', 'mirror'],
  usage: '[@member]',
	execute(message) {
    const embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setFooter(`Request by: ${message.author.username}`)
      .setTimestamp()
      .setThumbnail(message.client.user.displayAvatarURL())
		if (!message.mentions.users.size) {
      embed.setTitle('Nyar avatar').setImage(message.author.displayAvatarURL());
      message.channel.send(embed);
			//return message.channel.send(`Nyar avatar: ${message.author.displayAvatarURL()}`);
		} else {
		  const avatarList = message.mentions.users.map(user => {
        embed.setTitle(`${user.username}'s avatar`).setImage(user.displayAvatarURL());
        return embed;
			  //return `${user.username}'s avatar: ${user.avatarURL()}`;
		  });
		  message.channel.send(avatarList);
    }
	},
};