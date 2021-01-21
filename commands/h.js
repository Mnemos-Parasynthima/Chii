const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'h',
  description: 'No description necessary',
  aliases: ['nh'],
  execute(message) {
    const owner = process.env.ownerId;
    if (message.author.id === owner && message.channel.nsfw === true) {
      const subreddits = ['hentai', 'rule34', 'HentaiPetgirls'];
      const subreddit = Math.floor(Math.random() * subreddits.length);
      const source = subreddits[subreddit];
      randomPuppy(source) // Name of subreddits
        .then(url => {
          console.log(`${url}; Source: ${source}`);
          const embed = new Discord.MessageEmbed()
            .setTitle('NSFW stuff')
            .setColor('#ff0000')
            .setDescription(`${url}`)
            .setImage(url)
            .setFooter(`From '${source}' subreddit`, message.author.displayAvatarURL({ size: 32 }))
            .setTimestamp()
          return message.channel.send(embed);
        })
        .catch(error => {
          console.error(error);
          message.channel.send(error.path);
        })
        .finally(url => {
          const embed = new Discord.MessageEmbed()
            .setTitle('NSFW stuff')
            .setColor('#ff0000')
            .setImage(url)
            .setFooter(`From '${source}' subreddit`, message.author.displayAvatarURL({ size: 32 }))
            .setTimestamp()
          return message.channel.send(embed);
        })
    } else if (message.author.id !== owner) { message.reply('Command not allowed');
    } else if (message.channel.nsfw === false) { message.reply('Illegal!');
    } else { return; }
  }
};