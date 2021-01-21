module.exports = {
  name: 'poll',
  description: 'Makes the previous message a poll with two reactions',
  aliases: ['decide', 'choose'],
  async execute(message) {
    const addReactions = (msg) => {
      msg.react('👍');
      //message.react('^_^');

      setTimeout(() => {
        msg.react('👎');
        //message.react('ಠ_ಠ');
      }, 750);
    }

    await message.delete();

    const fetched = await message.channel.messages.fetch({ limit: 1});
    if (fetched && fetched.first()) {
      addReactions(fetched.first());
    }
  }
}