const Discord = require('discord.js');

module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
  aliases: ['ui'],
	execute(message) {
    const user = message.author.username;
    const id = `||${message.author.id}||`;
    const tag = message.author.tag;
    const pfp = message.author.avatarURL();
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
        },
        {
          name: 'ID',
          value: id
        },
        {
          name: 'Tag',
          value: tag
        }
      )
    ;
    message.channel.send(embed);
	},
};