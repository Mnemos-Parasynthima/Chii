const { Command } = require('discord.js-commando');

module.exports = class HolidayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'holiday',
      aliases: ['hd'],
      group: 'fun',
      memberName: 'holiday',
      description: `Use \`thxg\` for Thanksgiving, \`xmas\` for Christmas, and \`newyear\` for New Year's. No arguments give in a Happy Holidays. Uses the @everyone tag.`,
      guildOnly: true,
      format: '[holiday]',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'args',
          prompt: '',
          type: 'string',
          default: ''
        }
      ]    
    });
  }

  run(msg, { args }) {
    //console.log(args[0]);
    switch (args) {
      case 'thxg':
        msg.say('@everyone Happy Thanksgiving-nya!');
        break;
      case 'xmas':
        msg.say('@everyone Merry Christmas-nya!');
        break;
      case 'newyear':
        msg.say('@everyone Happy New Year-nya!');
        break;
      default:
        msg.say(`@everyone Happy Holidays-nya!`);
        break;
    }
  }
}