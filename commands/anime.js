const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'anime',
  description: 'NYA!!',
  aliases: ['awwnime', 'moe'],
  execute(message) {
    const subreddits = ['Animewallpaper', 'Re_Zero', 'Kaguya_sama', 'anime', 'OneTrueEmilia', 'Re_Zero']; // TODO: Add more subreddits
    const subreddit = Math.floor(Math.random() * subreddits.length);
    const source = subreddits[subreddit];
    randomPuppy(source) // Name of subreddits
      .then(url => {
        console.log(`${url}; Source: ${source}`);
        const embed = new Discord.MessageEmbed()
          .setTitle('Anime Pictures!')
          .setColor('#ff0000')
          .setDescription(`${url}`)
          .setImage(url)
          .setFooter(`Request by: ${message.author.username} | From '${source}' subreddit`, message.author.displayAvatarURL({ size: 32 }))
          .setTimestamp()
	      return message.channel.send(embed);
      })
      .catch(error => {
        console.error(error);
        //message.channel.send('Error! Could not find image-nya! Try again');
      });
  }
};