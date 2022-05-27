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
    // console.log(base, to);
    // console.log(typeof base, typeof to);
    base = base.toUpperCase();
    to = to.toUpperCase();
    // console.log(base, to);
    // console.log(typeof base, typeof to);
    
    if (base === to) return msg.reply(`*Demo*.....how can I convert ${base} to ${to} if they're the same scale!?`);

    //TODO: FIX
    // if (base != "F" || base != "C" || base != "K") {
    //   return msg.reply('Nyo! You must give me something in C, F, or K!');
    // }

    // if (to !== "F" || to !== "C" || to !== "K") {
    //   return msg.reply(`Nyo! I can\'t convert ${num} to such nyonsense!`);
    // }

    if (base === "F" && to === "C") {
      result = (num - 32) * (9/5);
      msg.say(`${num} F is ${result} C`);
    } else if (base === "C" && to === "F") {
      result = (9/5 * num) + 32;
      msg.say(`${num} C is ${result} F`);
    } else if (base === "C" && to === "K") {
      result = num + 273;
      msg.say(`${num} C is ${result} Kelvin`);
    } else if (base === "K" && to === "C") {
      result = num - 273;
      msg.say(`${num} Kelvin is ${result} C`);
    } else if (base === "F" && to === "K") {
      msg.reply('Nya need to convert to Celsius first to convert F to Kelvin!');
    } else if (base === "K" && to === "F") {
      msg.reply('Nya need to convert to Celsius first to conver Kelving to F!');
    }

  }
}