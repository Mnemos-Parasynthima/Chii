const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Display info about this server.',
  aliases: ['srv', 'server-info'],
	execute(message) {
    const name = message.guild.name;
    const embed = new Discord.MessageEmbed()
      .setTitle(`${name} Server Info`)
      .setDescription(`The following contains neccesary information about the server \`${name}\`.`)
      .setThumbnail(message.guild.iconURL())
      .setColor('#ff0000')
      .setTimestamp()
      .addFields(
        {
          name: 'Total Members: ',
          value: message.guild.memberCount
        },
        {
          name: 'Server Owner: ',
          value: message.guild.owner
        },
        {
          name: 'Server Region: ',
          value: message.guild.region
        },
        {
          name: 'Time created: ',
          value: message.guild.createdAt
        }
      )
    ;
    message.channel.send(embed);
	},
};