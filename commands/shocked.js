module.exports = {
  name: 'shocked',
  description: 'Gets shocked',
  usage: '<@member>',
  aliases: [''],
  execute(message) {
    const taggedUser = message.mentions.users.first();

    if (!taggedUser) {
      message.channel.send('Huh?');
    }

    if (taggedUser) {
      // this gets the member from the user
      const user = message.guild.member(taggedUser);
      if (user) {
        message.channel.send(`*SHOCKED*`);
      }
    }
    //Returns anime gif
  }
}