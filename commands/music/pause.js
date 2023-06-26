const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pause',
      aliases: ['ps'],
      group: 'music',
      memberName: 'pause',
      description: 'Pauses the current music/video.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  async run(msg) {
    msg.say("The `pause` command is currently not functional, nya! It will remain in service until the upcoming major update-nya!")
    // const { channel } = msg.member.voice;
    // const serverQueue = this.client.queue.get(msg.guild.id);
    // const embed = new MessageEmbed()
    //   .setColor('#ff0000')
    //   .setDescription('⏸ **PAUSED**');

    // try {
    //   if (!channel) return msg.say('Nyoin a voice chyannel!');
    //   if (msg.guild.me.voice.channel !== msg.member.voice.channel) return msg.say('Be with me!');

    //   if (serverQueue && serverQueue.playing) {
    //     serverQueue.playing = false;
    //     serverQueue.connection.dispatcher.pause(true);
    //     return msg.embed(embed);
    //   } else { return msg.say('Nyothing\'s playing!'); }
    // } catch {
    //   serverQueue.connection.dispatcher.end();
    //   await channel.leave();
    // }
  }
}