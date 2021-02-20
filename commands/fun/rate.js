const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class RateCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'rate',
      aliases: ['rateuseless', 'rtuseless', 'rtusls', 'ritsu', 'reto'],
      group: 'fun',
      memberName: 'rate',
      description: 'Rates someone\'s usefulness or uselessness out of 10.',
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  // Styling?!?!
  // Waifu rating?!?!
  run(msg) {
    const tagged = msg.mentions.users.first();
    const embed = new MessageEmbed();

    if (!tagged) return msg.say('Who should I rate-nya!');

    if (tagged.id === msg.client.user.id) {
      embed.setDescription('I\'m always 100/10!');
      return msg.embed(embed);
    } else if (tagged.id === process.env.ownerId) {
      embed.setDescription('My owner is always 100/10!');
      return msg.embed(embed);
    } else {
      const types = ['Useful', 'Useless', 'Useful', 'Useless', 'Useful', 'Useless'];
      const i = Math.floor(Math.random() * types.length);
      const rating = Math.floor(Math.random() * 10) + 0;

      embed.setTitle(`${types[i]} Rating`).setDescription(`${tagged} is ${rating}/10 ${types[i]}`);

      msg.embed(embed);
    }
  }
};