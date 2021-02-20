const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { uselessAqua } = require('../../assets/json/rp.json');

module.exports = class UselessCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'useless',
      aliases: ['usls', 'muyo'],
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
		

    if (!taggedUser) { // If no tag
      embed.setDescription('Everyone\'s useless! Except for my Master-nya');
      return msg.say(embed);
    }

    if (taggedUser.id === msg.client.user.id ) return msg.reply('I\'m nyever useless, you are!');

    if (taggedUser && taggedUser.id !== owner) { // If tag and tag is not owner
      const i = Math.floor(Math.random() * uselessAqua.length);
      embed.setDescription(`Useless ${taggedUser}-nya! Just like Aqua`).setImage(uselessAqua[i]);
	    return msg.embed(embed);
    } else if (taggedUser && taggedUser.id === owner) { // If tag and tag is owner
      return msg.reply('No u!');
    }
  }
};