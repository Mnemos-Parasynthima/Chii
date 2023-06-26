const { Command } = require('discord.js-commando');

module.exports = class TemperatureCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'temperature',
      aliases: ['tempconv', 'tempconverter'],
      group: 'fun',
      memberName: 'temperature',
      description: 'Converts between temperature scales. Valid scales are C (celsius), F (farenheit) and K (Kelvin).',
      format: '<base> <to> <num>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'base',
          prompt: 'What is the inyatial unit?',
          type: 'string'
        },
        {
          key: 'to',
          prompt: 'What should I convert to?',
          type: 'string'
        },
        {
          key: 'num',
          prompt: 'What do nya want to convert to?',
          type: 'float'
        }
      ]
    });
  }

  run(msg, { base, to, num }) {
    let result;
    const accepted = ['C', 'F', 'K'];

    base = base.toUpperCase();
    to = to.toUpperCase();

    if (!accepted.includes(base)) return msg.reply('Nyo! You must give me something in C, F, or K!');

    if (!accepted.includes(to)) return msg.reply(`Nyo! I can\'t convert ${num} to such nyonsense!`);

    if (base === to) return msg.reply(`But...how can I convert ${base} to ${to} if they're the same scale!?`);

    if (base === "F" && to === "C") {
      result = (num - 32) * (5/9);
      msg.say(`${num} F is ${result.toFixed(2)} C`);
    } else if (base === "C" && to === "F") {
      result = (9/5 * num) + 32;
      msg.say(`${num} C is ${result.toFixed(2)} F`);
    } else if (base === "C" && to === "K") {
      result = num + 273.15;
      msg.say(`${num} C is ${result.toFixed(2)} Kelvin`);
    } else if (base === "K" && to === "C") {
      result = num - 273.15;
      msg.say(`${num} Kelvin is ${result.toFixed(2)} C`);
    } else if (base === "F" && to === "K") {
      result = (num + 459.67) * (5/9);
      msg.say(`${num} F is ${result.toFixed(2)} Kelvin`);
    } else if (base === "K" && to === "F") {
      result = (num * (9/5)) - 459.67;
      msg.say(`${num} Kelvin is ${result.toFixed(2)} F`);
    }
  }
}