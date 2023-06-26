const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class StopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'stop',
      aliases: ['stp', 'exit', 'ext', 'leave'],
      group: 'music',
      memberName: 'stop',
      description: 'Disconnects Chii.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 1,
      }
    });
  }

  async run(msg) {
    msg.say("The `stop` command is currently not functional, nya! It will remain in service until the upcoming major update-nya!")
    // const { channel } = msg.member.voice;
    // const serverQueue = this.client.queue.get(msg.guild.id);
    // const embed = new MessageEmbed().setDescription('↪ Disconnected');

    // if (!channel) return msg.say('Nyoin a voice chyannel!');
    // if (msg.guild.me.voice.channel !== msg.member.voice.channel) return msg.say("Be with me!");

    // try {
    //   if (serverQueue) {
    //     serverQueue.musics = [];
    //     serverQueue.connection.dispatcher.end();
    //     msg.guild.me.voice.channel.leave();
    //   } else {
    //     msg.guild.me.voice.channel.leave();
    //   }
    //   return msg.embed(embed);
    // } catch {
    //   /*
    //   * Weird stuff here, need to fix, but it at least works
    //   */
    //   //console.log(`Catch block sQ: ${serverQueue}`);
    //   //serverQueue.connection.dispatcher.end();
    //   console.log(serverQueue);
    //   channel.leave();
    //   //return msg.say('Try Again-nya!');
    // }
  }
};