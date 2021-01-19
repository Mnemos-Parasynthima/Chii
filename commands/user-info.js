const Discord = require('discord.js');
const client = require('../chii.js');

module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
    const user = message.author.username;
    const id = message.author.id;
    const tag = message.author.tag;
    const pfp = message.author.defaultAvatarURL;
    //const icon = client.user.avatarURL;
		//message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    const embed = new Discord.MessageEmbed()
      .setTitle(`${user}'s User Info`)
      .setAuthor(user)
      //.setThumbnail(icon)
      .setColor('#ff0000')
      .setFooter(pfp)
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
        },
        {
          name: 'Profile Picture',
          value: pfp
        }
      )
    ;
    message.channel.send(embed);
	},
};