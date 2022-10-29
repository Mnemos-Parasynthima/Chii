const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const pjson = require('../../package.json');

module.exports = class ChiiInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'info',
      aliases: ['chiiinfo', 'self-info'],
      group: 'mod',
      memberName: 'info',
      description: 'Returns information of Chii.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const site = "https://mnemos-parasynthima.github.io/chii/";
    const avatar = this.client.user.displayAvatarURL();
    //console.log(guildMember);
    const embed = new MessageEmbed()
      .setThumbnail(avatar)
      .setTitle('About Chii')
      .setAuthor(this.client.user.username, avatar, site)
      .setDescription('')
      .setColor('#ff0000')
      .setTimestamp()
      .setFooter(this.client.user.username, avatar)
      .addFields(
        {
          name: 'Version',
          value: pjson.version
        },
        {
          name: 'Developed by ',
          value: 'Mnemos-Parasynthima'
        },
        {
          name: 'Created on',
          value: this.client.user.createdAt
        },
        /*{
          name: 'On the server since',
          value: this.client.member.joinedAt
        },*/
        {
          name: 'Site',
          value: site
        },
        {
          name: 'Servers using Chii',
          value: this.client.guilds.cache.size
        }
      )

    msg.embed(embed);
  }
};