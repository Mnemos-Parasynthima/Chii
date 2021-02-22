const { Command } = require('discord.js-commando');

module.exports = class SlashCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'slash',
      aliases: ['purge', 'r', 'del', 'delete', 'prune'],
      group: 'mod',
      memberName: 'slash',
	    description: 'Slash up to 99 messages.',
      format: '<number>',
      throttling: {
        usages: 5,
        duration: 1,
      },
      args: [
        {
          key: 'num',
          prompt: 'How many should I slash-nya?!',
          type: 'integer'
        }
      ]
    });
  }

  async run(msg, { num }) {
    if (num < 1 || num > 100) {
			return msg.reply('Nya need to input a nyumber between 0 and 100!');
    } else {
      await msg.delete(); // Should delete initial message

      msg.channel.bulkDelete(num, true).catch(err => {
			console.error(err);
			msg.say('there was an error trying to slash messages in this channel!');
		});
    }
  }
};