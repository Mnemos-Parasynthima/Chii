const { Command } = require('discord.js-commando');

module.exports = class BdayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'bday',
      aliases: ['bd'],
      group:'fun',
      memberName: 'bday',
      description: 'No description necessary',
      usage:'<@member>'
    }
  }
  execute(message) {
    const taggedTarget = message.mentions.users.first();

    if(!taggedTarget) {
      message.channel.send("Who's birthday-nya?");
    }

    if(taggedTarget) {
      message.channel.send(`BY THE POWER VESTED IN ME, SOULWORKER CHII, AND MY MASTER, WE WISH YOU HAPPY BIRTHDAY, ${taggedTarget}-KUN!`);
    }
  }
}