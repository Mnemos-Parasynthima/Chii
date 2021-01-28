const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const prefix = process.env.prefix;

module.exports = class HelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      aliases: ['commands', 'hlp', 'cmd'],
      group: 'mod',
      memberName: 'help',
      description: 'Lists all of my commands or nynfo about a specific command-nya.',
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

    if (!args) {
      embed.setTitle('SoulWorker Chii\'s Commands')
        .setDescription('I am SoulWorker Chii Aruel, one of the best SoulWorkers from West Cloudreamnya. Nya only Master is Umbre0n-sama, but I suppose I\'ll accept your commands-nya. UwU')
        .setFooter(`Send \`${prefix} help [command name]\` for more info onya a command-nya!`)
        .addFields(
          {
            name: 'Moderation',
            value: `\`help\`, \`kick\`, \`ban\`, \`server\`, \`slash\`, \`user-info\``
          },
          {
            name: 'Fun',
            value: `\`avatar\`, \`bday\`, \`fate\`, \`holiday\`, \`praise\`, \`say\`, \`shocked\`, \`poll\`, \`random\`, \`youtube\``
          },
          {
            name: 'Anime',
            value: `\`anime\`, \`foxgirl\`, \`kemonomimi\`, \`nekosgif\`, \`nekos\``
          },
          {
            name: 'Roleplaying',
            value: `\`baka\`, \`hug\`, \`pat\`, \`poke\`, \`slap\`, \`smug\`, \`tickle\``
          },
          {
            name: 'Music',
            value: `\`pause\`, \`play\`, \`queue\`, \`remove\`, \`resume\`, \`skip\`, \`stop\`, \`volume\`` // Add loop
          },
          {
            name: 'Miscelleanous',
            value: `\`fight\`, \`hiss\`, \`useless\`, \`master\``
          },
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

    if (!command) {
     return message.reply('Nyat\'s not a valid command-nya!');
    }

    embed.setTitle(`Chii's \`${command.name}\` command help`)
      .setDescription(`**Parameters:** \`<> - required; [] - optional\` \n\n${command.description}\n **Aliases:** ${command.aliases.join(', ')}\n **Usage:** \`${prefix} ${command.name} ${command.format || ''}\`\n`);
      /***Cooldown:** ${command.throttling || 3} second(s)`);*/ // Fix throttling
    message.embed(embed);
  }
};