const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

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
    msg.say("The `resume` command is currently not functional, nya! It will remain in service until the upcoming major update-nya!")
    // const { channel } = msg.member.voice;
    // const serverQueue = this.client.queue.get(msg.guild.id);
    // const embed = new MessageEmbed()
    //   .setColor('#00ff00')
    //   .setDescription('▶ **Resumed**');

    // if (!channel) return msg.say('Nyoin a voice chyannel!');
    // if (msg.guild.me.voice.channel !== msg.member.voice.channel) return msg.say('Be with me!');

    // try {
    //   if (serverQueue && !serverQueue.playing) {
    //     serverQueue.playing = true;
    //     serverQueue.connection.dispatcher.resume();
    //     return msg.embed(embed);
    //   } else { return msg.say('Nyothing to resume!'); }
    // } catch {
    //   serverQueue.connection.dispatcher.end();
    //   return msg.say('Try again');
    // }
  }
};