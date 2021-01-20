const Discord = require('discord.js');

module.exports = {
  name: 'fight',
  description: "Fights whoever is tagged",
  usage: '<@member>',
  aliases: ['duel'],
  execute(message) {
    const taggedUser = message.mentions.users.first();
    const ownerId = '756268171496783903';
    console.log(taggedUser);

    if(!taggedUser) {
      console.log('Entered if no taggedUser statement');
      message.channel.send("Who will I fight-nya?");
    }

    if(taggedUser && taggedUser.id !== ownerId) {
      console.log('Entered if taggedUser and if taggedUser is strictly not me');
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
        .setImage(message.client.user.displayAvatarURL())
      ;
      /*switch(attack) {
        case 0:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          message.channel.send(embed);
          break;
        case 1:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          message.channel.send(embed);
          break;
        case 2:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          message.channel.send(embed);
          break;
        case 3:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          message.channel.send(embed);
          break;
        case 4:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          message.channel.send(embed);
          break;
        case 5:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          message.channel.send(embed);
          break;
        case 6:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          message.channel.send(embed);
          break;
        case 7:
          //embed.attachFiles(['']).setThumbnail('attachment://');
          message.channel.send(embed);
          break;
      }*/
      message.channel.send(embed);
    } else if (taggedUser && taggedUser.id === ownerId) {
      console.log('Entered if taggedUser is strictly me');
      message.reply('I can\'t fight mnya love and Master-nya! How about nya fight you!');
    }
  }
}