const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ResumeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'resume',
      aliases: ['res', 'continue', 'rsm'],
      group: 'music',
      memberName: 'resume',
      description: 'Resumes paused music/video.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const { channel } = msg.member.voice;
    const embed = new MessageEmbed()
      .setColor('#00ff00')
      .setDescription('▶ **Resumed**')

    if (!channel) msg.say('Nyoin a voice chyannel!')
    const serverQueue = this.client.queue.get(msg.guild.id);
    if (msg.guild.me.voice.channel !== msg.member.voice.channel) {
      msg.say('Be with me!');
    }

    try {
      if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        msg.embed(embed);
      } else { msg.say('Nyothing to resume!'); }
    } catch {
      serverQueue.connection.dispatcher.end();
      msg.say('Try again')
    }
  }
};