const { Command } = require('discord.js-commando');

module.exports = class HolidayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'react',
      aliases: ['rct', 'reaccionar', 'hanno'],
      group: 'misc',
      memberName: 'react',
      description: `React! using \`wut\`, \`happy\`, \`chii\`, \`emilia\`, or \`puck\`. \n If nya want to add a reaction to the previous nyassage, use \`true\`. If nya want to send a reaction, use \`false\`.`,
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
          case 'wut':
            const chiiwut = this.client.emojis.cache.find(emoji => emoji.name === "chiiwut");
            msg.react(chiiwut);
            break;
          case 'happy':
            const chiihappy = this.client.emojis.cache.find(emoji => emoji.name === "chiihappy");
            msg.react(chiihappy);
            break;
          case 'chii':
            const chii = this.client.emojis.cache.find(emoji => emoji.name === "chii");
            msg.react(chii);
            break;
          case 'emilia': // TODO: add more emilias
            const emilia = this.client.emojis.cache.find(emoji => emoji.name === "drunkemilia");
            msg.react(emilia);
            break;
          case 'puck':
            const puck = this.client.emojis.cache.find(emoji => emoji.name === "emoji_1");
            msg.react(puck);
            break;
          default:
            msg.reply('That\'s nyot a reaction! Type \`chii help react\` to knyow the reactions!');
            break;
        }
      }

      await msg.delete();

      const fetched = await msg.channel.messages.fetch({ limit: 1});
      if (fetched && fetched.first()) {
        addReaction(fetched.first(), args);
      }
    } else if (bool === false) {
      //console.log('If bool is false');

      const sendReaction = (msg, args) => {
        switch (args) {
          case 'wut':
            const chiiwut = this.client.emojis.cache.find(emoji => emoji.name === "chiiwut");
            msg.say(`<:${chiiwut.name}:${chiiwut.id}>`);
            break;
          case 'happy':
            const chiihappy = this.client.emojis.cache.find(emoji => emoji.name === "chiihappy");
            msg.say(`<:${chihappyt.name}:${chiihappy.id}>`);
            break;
          case 'chii':
            const chii = this.client.emojis.cache.find(emoji => emoji.name === "chii");
            msg.say(`<:${chii.name}:${chii.id}>`);
            break;
          case 'emilia': // TODO: add more emilias
            const emilia = this.client.emojis.cache.find(emoji => emoji.name === "drunkemilia");
            msg.say(`<:${drunkemilia.name}:${drunkemilia.id}>`);
            break;
          case 'puck':
            const puck = this.client.emojis.cache.find(emoji => emoji.name === "emoji_1");
            msg.say(`<:${emoji_1.name}:${emoji_1.id}>`);
            break;
          default:
            msg.reply('That\'s nyot a reaction!');
            break;
        }
      }
      sendReaction(msg, args);
    } else {
      msg.say('Something wrong happened!');
    }

  }
}