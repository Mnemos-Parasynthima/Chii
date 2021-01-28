const { Command } = require('discord.js-commando');

module.exports = class RandomCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'randnum',
      aliases: ['random', 'number'],
      group: 'fun',
      memberName: 'random',
      description: 'Sends a random number between specified numbers',
      format: '<min> <max>',
      throttling: {
        usages: 1,
        duration: 10,
      },
      args: [
        {
          key: 'minNum',
          prompt: 'What is the minimum?',
          type: 'integer'
        },
        {
          key: 'maxNum',
          prompt: 'What is the maximum?',
          type: 'integer'
        }
      ]
    });
  }
  run(msg, { minNum, maxNum }) {
    const num = Math.floor(Math.random() * maxNum) + minNum;
    msg.say(num);
  }
};