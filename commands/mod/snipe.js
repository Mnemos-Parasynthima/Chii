const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class SnipeCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'snipe',
      aliases: ['snipes'],
      group: 'mod',
      memberName: 'snipe',
	    description: 'Returns recently deleted message.',
      throttling: {
        usages: 5,
        duration: 1,
      },

    });
  }

  async run(msg) {
    //TODO: be able to return up to x # of msgs
    const snipeMap = this.client.snipes;
    const snipe = snipeMap.get(msg.channel.id);

    if (!snipe) return msg.say("No snipe available!");

    const embed = new MessageEmbed()
      .setTitle("Snipes")
      //.setThumbnail(pfp)
      .setColor('#ff0000')
      .addFields(
        {
          name: 'Author:',
          value: snipe.author
        },
        {
          name: 'Content:',
          value: snipe.content
        },
        {
          name: "Attachments:",
          value: snipe.image || "None"
        }
      );
      
    msg.embed(embed);
  }
};