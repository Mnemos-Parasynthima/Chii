const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class AvatarCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'avatar',
	    aliases: ['icon', 'pfp', 'mirror', 'av'],
      group: 'fun',
      memberName: 'avatar',
	    description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
      format: '[member]',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'user',
          prompt: '',
          type: 'member',
          default: ''
        }
      ]
    });
  }

  run(msg, { user }) {
    const embed = new MessageEmbed()
      .setColor('#ff0000')
      .setFooter(`Request by: ${msg.author.username}`)
      .setTimestamp();
      
		if (!user) {
      embed.setTitle('Nyar avatar').setImage(msg.author.displayAvatarURL());
      return msg.embed(embed);
		}
    
    embed.setTitle(`${user.nickname || user.user.username}'s avatar`).setImage(user.user.displayAvatarURL());
		msg.embed(embed);
  }
}