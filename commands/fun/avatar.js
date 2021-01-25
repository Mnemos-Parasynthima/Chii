const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class AvatarCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'avatar',
	    aliases: ['icon', 'pfp', 'mirror', 'av'],
      group: 'fun',
      memberName: 'avatar',
	    description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
      format: '[@member]',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setFooter(`Request by: ${msg.author.username}`)
      .setTimestamp()
      .setThumbnail(msg.client.user.displayAvatarURL())
		if (!msg.mentions.users.size) {
      embed.setTitle('Nyar avatar').setImage(msg.author.displayAvatarURL());
      msg.embed(embed);
		} else {
		  const avatarList = msg.mentions.users.map(user => {
        embed.setTitle(`${user.username}'s avatar`).setImage(user.displayAvatarURL());
        return embed;
		  });
		  msg.embed(embed);
    }
  }
}