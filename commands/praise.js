module.exports = {
  name: 'praise',
  description: 'Praises whoever is mentioned, if not, Chii.',
  usage: '[@member]',
  aliases: [''],
  execute (message) {
    const taggedUser = message.mentions.users.first();

    if (!taggedUser) {
      message.channel.send('Yay! I love getting praised, nya!');
    }

    if (taggedUser) {
      // this gets the member from the user
      const user = message.guild.member(taggedUser);
      if (user) {
        message.channel.send(`You deserved being praised, ${user}, nya!`);
      }
    }
  }
}