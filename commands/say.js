module.exports = {
  name: 'say',
  description: 'Returns a statement',
  execute(message) {
    let replies = ['Nya', 'I hope you are doing well', 'I am the best SoulWorker', 'My Master is the best programmer', 
      'I love you, nya', 'I\'m sad', 'I wuv my Master', 'I\'m proud of what I did', '♡＾▽＾♡'
    ];
    const reply = Math.floor(Math.random() * replies.length);
    message.channel.send(replies[reply]);
  }
}