const { Command } = require('discord.js-commando');

module.exports = class PollCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'poll',
      aliases: ['decide', 'choose'],
      group: 'fun',
      memberName: 'poll',
      description: 'Makes the previous message a poll with two reactions',
      guildOnly: true,
      clientPermissions: ['MANAGE_MESSAGES'],
      throttling: {
        usages: 1,
        duration: 10,
      }
    });
  }

  async run(msg) {
    const addReactions = (message) => {
      message.react('👍');
      //message.react('^_^');

      setTimeout(() => {
        message.react('👎');
        //message.react('ಠ_ಠ');
      }, 750);
    }

    await msg.delete();

    const fetched = await msg.channel.messages.fetch({ limit: 1});
    if (fetched && fetched.first()) {
      addReactions(fetched.first());
    }
  }
};