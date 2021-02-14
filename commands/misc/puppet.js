const { Command } = require('discord.js-commando');

module.exports = class PuppetCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'puppet',
      aliases: ['ppt'],
      group: 'misc',
      memberName: 'puppet',
      description: `Nya.`,
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'args',
          prompt: 'What do you want me to say-nya!',
          type: 'string',
          default: ''
        }
      ]    
    });
  }

  run(msg, { args }) {
    let say = args.toUpperCase();

    if (msg.author.id !== process.env.ownerId) { return msg.reply("You don't tell me what to say-nya!"); }
    msg.say(say);
  }
}