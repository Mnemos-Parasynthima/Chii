const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class MasterCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'master',
      aliases: ['owner', 'creator'],
      group: 'misc',
      memberName: 'master',
      description: 'Returns information of the creator, Master, and love of Chii',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const embed = new Discord.MessageEmbed()
      .setTitle('UmbreOn-sama, my Master!')
      .setColor('#ff0000')
      .setThumbnail(msg.this.client.user.displayAvatarURL())
      .setDescription('UmbreOn-sama is my Master and love. The following is information about him-nya!')
      .setFooter('Have a nice day-nya!')
      .setTimestamp()
      .addFields(
        {
          name: 'Github',
          value: 'https://github.com/Mnemos-Parasynthima'
        },
        {
          name: 'Music Youtube Channel',
          value: 'https://www.youtube.com/channel/UCDKg-r2Rq1Zh9DqpdaC6VBA'
        },
        {
          name: 'Gaming Youtube Channel',
          value: 'https://www.youtube.com/channel/UC54bhkchahPZLVLFSvPQ6xA'
        },
        {
          name: 'Steam',
          value: 'https://steamcommunity.com/profiles/76561198872872417/'
        }
      )

    msg.embed(embed);
  }
};