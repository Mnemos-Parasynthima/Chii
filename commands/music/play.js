const { VoiceConnection } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const ytdl = require('ytdl-core-discord');

module.exports = class PlayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'play',
      aliases: ['p'],
      group: 'music',
      memberName: 'play',
      description: 'Search and play music-nya!',
      guildOnly: true,
      clientPermissions: ['CONNECT', 'SPEAK'],
      format: '<name>',
      throttling: {
        usages: 3,
        duration: 1,
      },
      args: [
        {
          key: 'query',
          prompt: 'What music-nya?! Give me a nyame or link',
          type: 'string'
        }
      ]
    });
  }

  async run(msg, { query }) {
    await msg.member.voice.channel.join()
      .then((connection) => {
        this.runVideo(msg, connection, query);
      }).catch(error => {
        console.error(error);
      })
  }

  async runVideo(msg, connection, video) {
    const dispatcher = connection.play(await ytdl(video, {filter: 'audioonly'}), {type: 'opus'});

    dispatcher.on('finish', () => {
      msg.member.voice.channel.leave();
    })
  }
};