const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class ServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'server',
      aliases: ['srv', 'server-info'],
      group: 'mod',
      memberName: 'server',
      description: 'Displays info about the server.',
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 5,
      }
    });
  }

  run(msg) {
    const { name, memberCount, owner, createdAt } = msg.guild;

    const embed = new MessageEmbed()
      .setTitle(`${name} Server Info`)
      .setDescription(`The following contains neccesary information about the server \`${name}\`.`)
      .setThumbnail(msg.guild.iconURL())
      .setColor('#ff0000')
      .setTimestamp()
      .addFields(
        {
          name: 'Total Members: ',
          value: memberCount
        },
        {
          name: 'Server Owner: ',
          value: owner
        },
        {
          name: 'Time created: ',
          value: createdAt
        }
      );

    msg.embed(embed);
  }
};