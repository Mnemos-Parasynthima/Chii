const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class UserCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'user-info',
      aliases: ['ui', 'user', 'self'],
      group: 'mod',
      memberName: 'user-info',
	    description: 'Display info about yourself.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const user = msg.author.username; // Destructure??
    const tag = msg.author.tag;
    const pfp = msg.author.avatarURL();
    const embed = new Discord.MessageEmbed()
      .setTitle(`${user}'s User Info`)
      .setAuthor(user)
      .setThumbnail(pfp)
      .setColor('#ff0000')
      .setTimestamp()
      .addFields(
        {
          name: 'Name:',
          value: user
        }
        {
          name: 'Tag',
          value: tag
        }
      )
    ;
    msg.embed(embed);
  }
};