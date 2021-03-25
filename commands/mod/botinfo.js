const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const pjson = require('../../package.json');

module.exports = class ChiiInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'botinfo',
      aliases: ['chiiinfo', 'info', 'self-info'],
      group: 'mod',
      memberName: 'botinfo',
      description: 'Returns information of Chii.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const site = "mnemos-parasynthima.github.io/chii/";

    const embed = new MessageEmbed()
      .setThumbnail(this.client.displayAvatarURL())
      .setTitle('About Chii:')
      .setAuthor(this.client.user.username, this.client.user.displayAvatarURL(), site)
      .setDescription('')
      .setColor('#ff0000')
      .setTimestamp()
      .setFooter(this.client.user.username, this.client.user.displayAvatarURL())
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
        {
          name: 'On the server since',
          value: this.client.user.joinedAt
        },
        {
          name: 'Github',
          value: 'https://github.com/Mnemos-Parasynthima/Chii'
        },
        {
          name: 'Site',
          value: site
        },
        {
          name: 'Server using Chii',
          value: this.client.guilds.size
        }
      )

    msg.embed(embed);
  }
};