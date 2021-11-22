const { Command } = require('discord.js-commando');

module.exports = class ReactCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'react',
      aliases: ['rct', 'reaccionar', 'hanno'],
      group: 'misc',
      memberName: 'react',
      description: `React! using \`shrug\`, \`arua\`, \`ephnel\`, \`yorka\`, \`sip\`, or \`think\`.`,
      guildOnly: true,
      format: '<reaction>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'args',
          prompt: 'What should I react with-nya!?',
          type: 'string'
        }
      ]
    });
  }

  async run(msg, { args }) {
    try {
      const sendReaction = (msg, args) => {
        //cons happys = 
        switch (args) {
          case 'shrug':
            const shrug = this.client.emojis.cache.find(emoji => emoji.name === "shrug");
            msg.say(`<:${shrug.name}:${shrug.id}>`);
            break;
          case 'arua':
            const arua = this.client.emojis.cache.find(emoji => emoji.name === "arua");
            msg.say(`<:${arua.name}:${arua.id}>`);
            break;
          case 'ephnel':
            const ephnel = this.client.emojis.cache.find(emoji => emoji.name === "ephnel");
            msg.say(`<:${ephnel.name}:${ephnel.id}>`);
            break;
          case 'yorka':
            const yorka = this.client.emojis.cache.find(emoji => emoji.name === "yorka");
            msg.say(`<:${yorka.name}:${yorka.id}>`);
            break;
          case 'sip':
            const sip = this.client.emojis.cache.find(emoji => emoji.name === "sip");
            msg.say(`<:${sip.name}:${sip.id}>`);
            break;
          case 'think':
            const think = this.client.emojis.cache.find(emoji => emoji.name === "think");
            msg.say(`<:${think.name}:${think.id}>`);
            break;
          // case 'happy':
          //   const happy = this.client.emojis.cache.find(emoji => emoji.name === happys);
          //   msg.say(`<:${happy.name}:${happy.id}>`);
          //   break;
          case 'serious':
            const serious = this.client.emojis.cache.find(emoji => emoji.name === "serious");
            msg.say(`<:${serious.name}:${serious.id}>`);
            break;
          case 'satisproud':
            const satisproud = this.client.emojis.cache.find(emoji => emoji.name === "satisproud");
            msg.say(`<:${satisproud.name}:${satisproud.id}>`);
            break;
          case 'sad':
            const sad = this.client.emojis.cache.find(emoji => emoji.name === "sad");
            msg.say(`<:${sad.name}:${sad.id}>`);
            break;
          case 'annoyger':
            const annoyger = this.client.emojis.cache.find(emoji => emoji.name === "annoyger");
            msg.say(`<:${annoyger.name}:${annoyger.id}>`);
            break;
          default:
            msg.reply('That\'s nyot a reaction! Type \`chii help react\` to knyow the reactions!');
            break;
        }
      }
      sendReaction(msg, args);
    } catch (error) {
      console.error(error);
      msg.say('Something wrong happened!');
    }

  }
}