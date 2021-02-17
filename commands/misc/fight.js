const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const {
  budocat,
  budo2,
  budo3,
  budo5,
  budoka6,
  kittykendo,
  bakeneko,
  kasha
} = require('../../assets/json/imgs.json');

module.exports = class FightCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'fight',
      aliases: ['duel', 'pelea', 'kenka', 'tatakai'],
      group: 'misc',
      memberName: 'fight',
      description: "Fights whoever is tagged",
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const taggedUser = msg.mentions.users.first();
    const owner = process.env.ownerId;

    if(!taggedUser) {
      //console.log('Entered if no taggedUser statement');
      return msg.say("Who will I fight-nya?");
    }

    if (taggedUser.id === msg.client.user.id) return msg.reply('Why will I fight nyaself?');

    if(taggedUser && taggedUser.id !== owner) {
      //console.log('Entered if taggedUser and if taggedUser is strictly not me');
      const attacks = [
        'Budo Cat', 'Budo 2: Claws Out', 'Budo 3: Prey Sighted', 'Budo 5: Cat by Night',
        'Budoka 6: Dance of Death', 'Kitty Kendo', 'Bakeneko\'s Curse', 'Kasha\'s carriage'  
      ];
      const i = Math.floor(Math.random() * attacks.length);

      const reactions = ['UwU', '♡＾▽＾♡', '( =ω=)..nyaa', 'ต(=ω=)ต', '┐( ˘_˘ )┌', '	(*≧ω≦*)'];
      const j = Math.floor(Math.random() * reactions.length);

      //const target = taggedUser.username; // Name only, no @
      const embed = new Discord.MessageEmbed()
        .setTitle(`Fight with SoulWorker Chii!`)
        .setColor('#ff0000')
        .setDescription(`SoulWorker Chii uses \`${attacks[i]}\` on ${taggedUser}. Instant one-hit K.O.!\n
          Chii: ${reactions[j]}`
        )
        .setImage(msg.client.user.displayAvatarURL())
      ;
      switch(i) {
        case 0:
          embed.setThumbnail(budocat);
          msg.embed(embed);
          break;
        case 1:
          embed.setThumbnail(budo2);
          msg.embed(embed);
          break;
        case 2:
          embed.setThumbnail(budo3);
          msg.embed(embed);
          break;
        case 3:
          embed.setThumbnail(budo5);
          msg.embed(embed);
          break;
        case 4:
          embed.setThumbnail(budoka6);
          msg.embed(embed);
          break;
        case 5:
          embed.setThumbnail(kittykendo);
          msg.embed(embed);
          break;
        case 6:
          embed.setThumbnail(bakeneko);
          msg.embed(embed);
          break;
        case 7:
          embed.setThumbnail(kasha);
          msg.embed(embed);
          break;
      }
      //msg.embed(embed);
      //console.log(embed);
    } else if (taggedUser && taggedUser.id === owner) {
      //console.log('Entered if taggedUser is strictly me');
      return msg.reply('I can\'t fight mnya love and Master-nya! How about nya fight you!');
    }
  }
};