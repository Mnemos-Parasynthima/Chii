const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class RateCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'rate',
      aliases: ['rateuseless', 'rtuseless', 'rtusls'],
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

    if (tagged.id === '788284993759215656') {
      embed.setDescription('I\'m always 100/10!');
      return msg.embed(embed);
    } else if (tagged.id === process.env.ownerId) {
      embed.setDescription('My owner is always 100/10!');
      return msg.embed(embed);
    } else {
      const types = ['Useful', 'Useless', 'Useful', 'Useless', 'Useful', 'Useless'];
      const type = Math.floor(Math.random() * types.length);
      const rating = Math.floor(Math.random() * 10) + 0;

      embed.setTitle(`${types[type]} Rating`).setDescription(`${tagged} is ${rating}/10 ${types[type]}`);

      msg.embed(embed);
    }
  }
};