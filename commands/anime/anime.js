const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const randomPuppy = require('random-puppy');
/*
****TODO****
Incorporate better subreddit image get
*/
module.exports = class AnimeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'anime',
      aliases: ['awwnime', 'moe'], // Change aliases
      group: 'anime',
      memberName: 'anime',
      description: 'Animenya! [Note: Repetitive images]',
      throttling: {
        usages: 3,
        duration: 3,
      }
    });
  }

  run(msg) {
    // Array of subreddits to fetch data from
    const subreddits = ['Animewallpaer', 'Re_Zero', 'OneTrueEmilia', 'awwnime']; // TODO: Add more subreddits
    const subreddit = Math.floor(Math.random() * subreddits.length); // Random nuber
    const source = subreddits[subreddit]; // Gets a random subreddit from array

    randomPuppy(source) // Name of subreddit between parent.
      .then(url => {
        console.log(`${url}; Source: ${source}`); // For retrieval info
        const embed = new Discord.MessageEmbed()
          .setTitle('Anime Pictures!')
          .setColor('#ff0000')
          .setDescription(`${url}`)
          .setImage(url)
          .setFooter(`Request by: ${msg.author.username} | From '${source}' subreddit`, msg.author.displayAvatarURL({ size: 32 }))
          .setTimestamp()

        return msg.embed(embed);
      })
      .catch(error => {
        console.error(error);
        msg.say('Error!');
      });
  }
};