const { Command } = require('discord.js-commando');

module.exports = class HolidayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'react',
      aliases: ['rct', 'reaccionar', 'hanno'],
      group: 'misc',
      memberName: 'react',
      description: `React! using \`worried\`, \`angry\`, \`mad3\`, \`furious\`, \`scared\`, \`wut\`, or \`smile\`. \n If nya want to add a reaction to the previous nyassage, use \`true\`. If nya want to send a reaction, use \`false\`.`,
      guildOnly: true,
      format: '<true | false> <reaction>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'bool',
          prompt: '',
          type: 'boolean',
          /*default: true/*,
          oneOf: ['true', 'false']*/
        },
        {
          key: 'args',
          prompt: 'What should I react with-nya!?',
          type: 'string'
        }
      ]
    });
  }

  async run(msg, { bool, args }) {
    if (bool === true) {
      //console.log('If bool is true');

      const addReaction = (msg, args) => {
        switch (args) {
          case 'worried':
            const chiiworried = this.client.emojis.cache.find(emoji => emoji.name === "chiiworried");
            msg.react(chiiworried);
            break;
          case 'angry':
            const chiiangry = this.client.emojis.cache.find(emoji => emoji.name === "chiiangry");
            msg.react(chiiangry);
            break;
          case 'mad3':
            const chiimad3 = this.client.emojis.cache.find(emoji => emoji.name === "chiimad3");
            msg.react(chiimad3);
            break;
          case 'furious':
            const chiifurious = this.client.emojis.cache.find(emoji => emoji.name === "chiifurious");
            msg.react(chiifurious);
            break;
          case 'scared':
            const chiiscared = this.client.emojis.cache.find(emoji => emoji.name === "chiiscared");
            msg.react(chiiscared);
            break;
          case 'wut':
            const chiiwut = this.client.emojis.cache.find(emoji => emoji.name === "chiiwut");
            msg.react(chiiwut);
            break;
          case 'smile':
            const chiismile = this.client.emojis.cache.find(emoji => emoji.name === "chiismile");
            msg.react(chiismile);
            break;
          default:
            msg.reply('That\'s nyot a reaction! Type \`chii help react\` to knyow the reactions!');
            break;
        }
      }

      await msg.delete();

      const fetched = await msg.channel.messages.fetch({ limit: 1 });
      if (fetched && fetched.first()) {
        addReaction(fetched.first(), args);
      }
    } else if (bool === false) {
      //console.log('If bool is false');

      const sendReaction = (msg, args) => {
        switch (args) {
          case 'worried':
            const chiiworried = this.client.emojis.cache.find(emoji => emoji.name === "chiiworried");
            msg.say(`<:${chiiworried.name}:${chiiworried.id}>`);
            break;
          case 'angry':
            const chiiangry = this.client.emojis.cache.find(emoji => emoji.name === "chiiangry");
            msg.say(`<:${chiiangry.name}:${chiiangry.id}>`);
            break;
          case 'mad3':
            const chiimad3 = this.client.emojis.cache.find(emoji => emoji.name === "chiimad3");
            msg.say(`<:${chiimad3.name}:${chiimad3.id}>`);
            break;
          case 'furious':
            const chiifurious = this.client.emojis.cache.find(emoji => emoji.name === "chiifurious");
            msg.say(`<:${chiifurious.name}:${chiifurious.id}>`);
            break;
          case 'scared':
            const chiiscared = this.client.emojis.cache.find(emoji => emoji.name === "chiiscared");
            msg.say(`<:${chiiscared.name}:${chiiscared.id}>`);
            break;
          case 'wut':
            const chiiwut = this.client.emojis.cache.find(emoji => emoji.name === "chiiwut");
            msg.say(`<:${chiiwut.name}:${chiiwut.id}>`);
            break;
          case 'smile':
            const chiismile = this.client.emojis.cache.find(emoji => emoji.name === "chiismile");
            msg.say(`<:${chiismile.name}:${chiismile.id}>`);
            break;
          default:
            msg.reply('That\'s nyot a reaction! Type \`chii help react\` to knyow the reactions!');
            break;
        }
      }
      sendReaction(msg, args);
    } else {
      msg.say('Something wrong happened!');
    }

  }
}