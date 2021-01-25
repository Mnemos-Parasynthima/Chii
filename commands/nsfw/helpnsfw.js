const Discord = require('discord.js');
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

  run(message, { args }) {
    const embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setThumbnail(message.client.user.displayAvatarURL())
      .setTimestamp()
    const commands = message.client.registry.commands; // TODO: Destructure
    //console.log(commands);
    //console.log(message.client);

    if (!args) {
      embed.setTitle('SoulWorker Chii\'s Commands')
        .setDescription('I am SoulWorker Chii Aruel, one of the best SoulWorkers from West Cloudreamnya. Nya only Master is Umbre0n-sama, but I suppose I\'ll accept your commands-nya. UwU')
        .setFooter(`Send \`${prefix} help [command name]\` for more info onya a command-nya!`)
        .addFields(
          {
            name: 'NSFW',
            value: `\`cum\`, \`hentai\`, \`hgif\`, \`nsfwngif\`, \`nsfwn\`, \`oppai\`, \`clit\``
          }
        )

      return message.embed(embed)
        .then(() => {
          if (message.channel.type === 'text') return;
        })
        .catch(error => {
          console.error(`Could not send help to ${message.author.tag}.\n`, error);
          message.reply('It seems like I can\'t send!');
        });
    }

    const name = args.toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
    //console.log(`${name}, ${command}`);
    //console.log(args[0]);

    if (!command) {
     return message.reply('Nyat\'s not a valid command-nya!');
    }

    embed.setTitle(`Chii's \`${command.name}\` command help`)
      .setDescription(`**Parameters:** \`<> - required; [] - optional\` \n\n${command.description}\n **Aliases:** ${command.aliases.join(', ')}\n **Usage:** \`${prefix} ${command.name} ${command.format || ''}\`\n`);
      /***Cooldown:** ${command.throttling || 3} second(s)`);*/ // Fix throttling
    message.embed(embed);
  }
};