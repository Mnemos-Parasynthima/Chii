const { Command } = require('discord.js-commando');
const { MessageEmbed, Util } = require('discord.js');
const ytdl = require('ytdl-core');
const yts = require('yt-search');

module.exports = class PlayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'play',
      aliases: ['p', 'ply', 'music', 'msc'],
      group: 'music',
      memberName: 'play',
      description: 'Search and play music-nya!',
      guildOnly: true,
      clientPermissions: ['CONNECT', 'SPEAK'],
      format: '<name | link>',
      throttling: {
        usages: 3,
        duration: 1,
      },
      args: [
        {
          key: 'query',
          prompt: 'What music-nya?! Give me a nyame or link!',
          type: 'string'
        }
      ]
    });
  }

  async run(msg, { query }) {
    const channel = msg.member.voice.channel;
    if (!channel) {
      msg.channel.send('Nyoin a voice chyanneel!');
    }

    let serverQueue = msg.client.queue.get(msg.guild.id);

    let searched = await yts.search(query);
    if (searched.videos.length === 0) {
      msg.say('I can\'t find nya music!');
    }
    let musicInfo = searched.videos[0];

    const music = {
      id: musicInfo.videoId,
      title: Util.escapeMarkdown(musicInfo.title),
      url: musicInfo.url,
      duration: musicInfo.duration.toString(),
      img: musicInfo.image,
      req: msg.author
    };

    if (serverQueue) {
      serverQueue.musics.push(music);
      let embed = new MessageEmbed()
        .setTitle('Music has been nyadded to the queue')
        .setImage(music.img)
        .setColor('#ff0000')
        .setFooter(`Requested by ${msg.author}`)
        .addFields(
          {
            name: 'Title',
            value: music.title
          },
          {
            name: 'Url',
            value: music.url
          },
          {
            name: 'Duration',
            value: music.duration
          }
        )

      return msg.embed(embed);
    }

    const queueConstruct = {
      textChanel: msg.channel,
      voiceChannel: channel,
      connection: null,
      musics: [],
      volume: 3.5,
      playing: true
    };
    msg.client.queue.set(msg.guild.id, queueConstruct);
    queueConstruct.musics.push(music);

    const play = async music => {
      const queue = msg.client.queue.get(msg.guild.id);
      if (!music) {
        msg.client.queue.delete(msg.guild.id);
        return;
      }

      const dispatcher = queue.connection
        .play(ytdl(music.url))
        .on('finish', () => {
          queue.musics.shift();
          play(queue.musics[0])
        })
        .on('error', error => console.error(error));
      
      dispatcher.setVolumeLogarithmic(queue.volume / 5);
      let embed = new MessageEmbed()
        .setTitle('Start Playing')
        .setImage(music.img)
        .setColor('#ff0000')
        .setFooter(`Request by ${msg.author}`)
        .addFields(
          {
            name: 'Title',
            value: music.title
          },
          {
            name: 'Url',
            value: music.url
          },
          {
            name: 'Duration',
            value: music.duration
          }
        )

      queue.textChanel.send(embed);
    };

    try {
      const connection = await channel.join();
      queueConstruct.connection = connection;
      channel.guild.voice.setSelfDeaf(true);
      play(queueConstruct.musics[0]);
    } catch (error) {
      console.error(`Could not join vc: ${error}`);
      msg.client.queue.delete(msg.guild.id);
      return console.log(`Could not join vc: ${error}`, msg.channel);
    }
  }
};