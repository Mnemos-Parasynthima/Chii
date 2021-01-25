const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class FightCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'fight',
      aliases: ['duel'],
      group: 'misc',
      memberName: 'fight',
      description: "Fights whoever is tagged",
      guildOnly: true,
      format: '<@member>',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const taggedUser = msg.mentions.users.first();
    const owner = this.client.owner;
    //console.log(taggedUser);

    if(!taggedUser) {
      //console.log('Entered if no taggedUser statement');
      msg.say("Who will I fight-nya?");
    }

    if(taggedUser && taggedUser.id !== owner) {
      //console.log('Entered if taggedUser and if taggedUser is strictly not me');
      const attacks = [
        'Budo 2: Claws Out', 'Kitty Kendo', 'Budo 5: Cat by Night', 'Budoka 6: Dance of Death',
        'Kasha\'s carriage', 'Bakeneko\'s Curse', 'Budo 3: Prey Sighted', 'Budo Cat'
      ];
      const attack = Math.floor(Math.random() * attacks.length);

      const reactions = ['UwU', '♡＾▽＾♡', '( =ω=)..nyaa', 'ต(=ω=)ต', '┐( ˘_˘ )┌', '	(*≧ω≦*)'];
      const reaction = Math.floor(Math.random() * reactions.length);

      const target = taggedUser.username;
      const embed = new Discord.MessageEmbed()
        .setTitle(`Fight with SoulWorker Chii!`)
        .setColor('#ff0000')
        .setDescription(`SoulWorker Chii uses \`${attacks[attack]}\` on ${taggedUser}. Instant one-hit K.O.!\n
          Chii: ${reactions[reaction]}`
        )
        .setImage(msg.this.client.user.displayAvatarURL())
      ;
      /*switch(attack) {
        case 0:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          msg.embed(embed);
          break;
        case 1:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          msg.embed(embed);
          break;
        case 2:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          msg.embed(embed);
          break;
        case 3:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          msg.embed(embed);
          break;
        case 4:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          msg.embed(embed);
          break;
        case 5:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          msg.embed(embed);
          break;
        case 6:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          msg.embed(embed);
          break;
        case 7:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          msg.embed(embed);
          break;
      }*/
      msg.embed(embed);
    } else if (taggedUser && taggedUser.id === owner) {
      //console.log('Entered if taggedUser is strictly me');
      msg.reply('I can\'t fight mnya love and Master-nya! How about nya fight you!');
    }
  }
};