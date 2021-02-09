const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { uselessAqua } = require('../../assets/json/rp.json');

module.exports = class UselessCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'useless',
      aliases: ['usls'],
      group: 'misc',
      memberName: 'useless',
	    description: 'Calls someone useless if name provided.',
      guildOnly: true,
      format: '[member]',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const embed = new MessageEmbed().setColor('#ff0000');
		const taggedUser = msg.mentions.users.first();
    const owner = process.env.ownerId;
		
    if (taggedUser.id === process.env.selfId ) return msg.reply('I\'m nyever useless, you are!');

    if (!taggedUser) { // If no tag
      embed.setDescription('Everyone\'s useless! Except for my Master-nya');
      msg.say(embed);
    }

    if (taggedUser && taggedUser.id !== owner) { // If tag and tag is not owner
      const i = Math.floor(Math.random() * uselessAqua.length);
      embed.setDescription(`Useless ${taggedUser}-nya! Just like Aqua`).setImage(uselessAqua[i]);
	    msg.embed(embed);
    } else if (taggedUser && taggedUser.id === owner) { // If tag and tag is owner
      msg.reply('No u!');
    }
  }
};