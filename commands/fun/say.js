const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'say',
      aliases: ['reply', 'rply'],
      group: 'fun',
      memberName: 'say',
      description: 'Returns a statement',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const replies = ['Nya', 'I hope you are doing well', 'I am the best SoulWorker', 'My Master is the best programmer', 
      'I love you, nya', 'I wuv my Master	(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)', 'I\'m proud', '♡＾▽＾♡', '┐( ˘_˘ )┌', 'Chachachachachacha', 'Itadakimasuuu', 'Gochisosamaaa'
    ];
    const i = Math.floor(Math.random() * replies.length);
    msg.delete();
    msg.say(replies[i]);
  }
};