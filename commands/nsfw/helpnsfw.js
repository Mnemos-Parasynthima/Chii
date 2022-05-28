const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const prefix = process.env.prefix;

module.exports = class NHelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'nhelp',
      aliases: ['ncommands', 'nhlp', 'ncmd'],
      group: 'mod',
      memberName: 'nhelp',
      description: 'List all of my NSFW commands or info about a specific NSFW command.',
      format: '<command name>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'args',
          prompt: '',
          type: 'string',
          default: ''
        }
      ]
    });
  }

  run(msg, { args }) {
    const embed = new MessageEmbed()
      .setColor('#ff0000')
      .setThumbnail(msg.client.user.displayAvatarURL())
      .setTimestamp();

    const commands = msg.client.registry.commands; // Destructure?

    if (!args) {
      embed.setTitle('SoulWorker Chii\'s Commands')
        .addFields(
          {
            name: 'NSFW',
            value: `\`bj\`, \`booru\`, \`hentai\`, \`nhelp\`, \`nsfwn\``
            //
          }
        );

      return msg.embed(embed)
        .then(() => {
          if (msg.channel.type === 'text') return;
        })
        .catch(error => {
          console.error(`Could not send help to ${msg.author.tag}.\n`, error);
          msg.reply('It seems like I can\'t send!');
        });
    }

    const name = args.toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) return msg.reply('Nyat\'s not a valid command-nya!');

    embed.setTitle(`Chii's \`${command.name}\` command help`)
      .setDescription(`**Parameters:** \`<> - required; [] - optional\` \n\n${command.description}\n **Aliases:** ${command.aliases.join(', ')}\n **Usage:** \`${prefix} ${command.name} ${command.format || ''}\`\n`);
      /***Cooldown:** ${command.throttling || 3} second(s)`);*/ // Fix throttling
    msg.embed(embed);
  }
};