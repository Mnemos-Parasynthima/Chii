module.exports = {
  name: 'holiday',
  description: `Use \`thxg\` for Thanksgiving, \`xmas\` for Christmas, and \`newyear\` for New Year's. No arguments give in a Happy Holidays.`,
  usage: '<holiday>',
  aliases: ['hd'],
  execute(message, args) {
    switch (args[0]) {
      case 'thxg':
        message.channel.send('@everyone Happy Thanksgiving-nya!');
        break;
      case 'xmas':
        message.channel.send('@everyone Merry Christmas-nya!');
        break;
      case 'newyear':
        message.channel.send('@everyone Happy New Year-nya!');
        break;
      default:
        message.channel.send(`@everyone Happy Holidays-nya!`);
        break;
    }
  }
}