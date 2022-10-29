const { Command } = require('discord.js-commando');

module.exports = class PunishCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'punish',
      aliases: ['punish'],
      group: 'misc',
      memberName: 'punish',
      description: `Nya.`,
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }   
    });
  }

  run(msg) {
    const taggedUser = msg.mentions.users.first();

    if (!taggedUser) return msg.say('Nyoooooooooooo');
    msg.say(`Get punished ${taggedUser}!`);
  }
}