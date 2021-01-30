const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const redditImageFetcher = require('reddit-image-fetcher');
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

  //FIIIXX
  async run(msg) {
    // Array of subreddits to fetch data from
    const subreddit = ['OneTrueEmilia', 'awwnime']; // TODO: Add more subreddits
    const i = Math.floor(Math.random() * subreddit.length); // Random number

    await redditImageFetcher.fetch({
      type: 'custom', //Opt: 'meme', 'wallpaper', 'custom'
      subreddit: subreddit[i] // Name of subreddit
    })
      
  }
};

/*
.then(image => {
        console.log(`${image}; Source: ${subreddit[i]}`); // For retrieval info
        const embed = new MessageEmbed()
          .setTitle('Anime Pictures!')
          .setColor('#ff0000')
          .setDescription(`${image}`)
          .setImage(url)
          .setFooter(`Request by: ${msg.author.username} | From '${subreddit[i]}' subreddit`, msg.author.displayAvatarURL({ size: 32 }))
          .setTimestamp()

        return msg.embed(embed);
      })
      .catch(error => {
        console.error(error);
        msg.say('Error!');
      });
*/