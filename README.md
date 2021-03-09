# Meet SoulWorker Chii [Aruel]! Version 2.3

Meet SoulWorker Chii \[Aruel]! She is simple, yet feature-rich. She runs with the **[Discord.JS](https://discord.js.org/#/)** Library and the **Commando** framework.

## Table of Contents:
- [Setup](#setup)
- [Commands](#commands)
  - [Anime](#anime)
  - [Developer](#developer)
  - [Fun](#fun)
  - [Miscellaneous](#miscellaneous)
  - [Music](#music)
  - [NSFW](#nsfw)
  - [Roleplay](#roleplay)
- [Modification](#modification)
- [Contribution](#contribution)
- [Other](#other)

## Setup:
1. Install [Node.js](https://nodejs.org/en/) 12 or higher if not already done so.
2. Clone or download the repository.
3. Install build tools (for use of Canvas) with terminal.
    - `npm install --global windows-build-tools`
4. Install dependencies with `npm install` with terminal.
5. Create a discord bot application with [Discord Developer Portal](https://discordapp.com/developers/applications/).
6. Fill out the config.json file with `token`, `ownerId` (must have developer tools enabled in Discord to access it), and `prefix`. The default prefix is `chii` in order not to confuse with common prefixes such as !, -, or $. Using a mention also works as part of the Commando framework.
7. Using the link from the developer portal, invite to your server.
8. To run locally, use `npm start`. To host 24/7, I recommend using [replit](https://repl.it/) and [uptimerobot](https://uptimerobot.com/).

## Commands:

(Note: Many of the commands made were for my own purpose so feel free to change them or delete them. Some commands are not listed and such are those that were for my own purpose)

Using `<>` is required whereas `[]` is optional.

### Anime
| Command    | Arguments | Description                                                |
|------------|-----------|------------------------------------------------------------|
| `foxgirl`    | None      | Sends an image of a foxgirl from the Nekos.life API.       |
| `kemonomimi` | None      | Sends an image of any kemonomimi from the Nekos.life API.  |
| `nekosgif`   | None      | Sends a GIF of a neko or nekos from the Nekos.life API.    |
| `nekos`      | None      | Sends an image of a neko or nekos from the Nekos.life API. |

### Developer
| Command | Arguments | Description                              |
|---------|-----------|------------------------------------------|
| `emulate` | None      | Emulates an event. (For developers only) |

### Fun
| Command    | Arguments         | Description                                                            |
|------------|-------------------|------------------------------------------------------------------------|
| `avatar`   | `[member]`        | Returns the avatar of a member, if not, then yourself.                 |
| `bday`     | `<member>`        | Wishes happy birthday to someone.                                      |
| `fate`     | None              | Returns a fate based on a question.                                    |
| `holiday`  | `[holiday]`       | Sends a happy [holiday], if no arguments, sends 'Happy Holidays!'      |
| `kaomoji`  | None              | Sends a japanese emoji from a collection of emojis. (=^-ω-^=)          |
| `lewd`     | None              | Sends a GIF of Oh how lewd!                                            |
| `poll`     | None              | Makes a thumbs up or thumbs down poll based on the previous message.   |
| `praise`   | `[member]`        | Praises whoever is tagged, if not, it defaults to Chii.                |
| `randnum`  | `<min><max>`      | Returns a random number between the specified limits.                  |
| `rate`     | `<member>`        | Rates someone's usefulness or uselessness.                             |
| `say`      | None            | Makes Chii say something on her own.                                   |
| `shocked`  | `<member>`        | Sends a GIF of a shocked anime face.                                   |
| `tempconv` | `<base><to><num>` | Converts a given temperature to either Celsius, Fahrenheit, or Kelvin. |

### Miscellaneous
| Command  | Arguments                   | Description                                                                       |
|----------|-----------------------------|-----------------------------------------------------------------------------------|
| `fight`  | `<member>`                  | Makes Chii fight someone.                                                         |
| `hiss`   | `<member>`                  | Intimidates someone, hiisss!!                                                     |
| `master` | None                        | Provides information about Chii's owner.                                          |
| `puppet` | `<line>`                    | Makes Chii say what is provided in capitalized and quoted.                        |
| `react`  | `<true \| false><reaction>`  | Reacts to something. Use `true` to add a reaction and `false` to send a reaction. |

### Moderation
| Command     | Arguments        | Description                                                                               |
|-------------|------------------|-------------------------------------------------------------------------------------------|
| `ban`       | `<member>`       | Bans a member.                                                                            |
| `help`      | `[command name]` | Sends a list of commands. When supplied a command name, it sends info about that command. |
| `kick`      | `<member>`       | Kicks a member.                                                                           |
| `server`    | None             | Sends information about the server.                                                       |
| `slash`     | `<number>`       | Deletes up to 100 messages.                                                               |
| `user-info` | None             | Sends information about oneself.                                                          |

### Music
| Command  | Arguments  | Description                                             |
|----------|------------|---------------------------------------------------------|
| `pause`  | None       | Pauses the ongoing video.                               |
| `play`   | `<name>`   | Plays a video from YouTube from the given name.         |
| `queue`  | None       | Lists the queue of videos.                              |
| `remove` | `<number>` | Removes a video from the queue with a specified number. |
| `resume` | None       | Resumes the paused video.                               |
| `skip`   | None       | Skips the current video.                                |
| `stop`   | None       | Stops what is playing and disconnects.                  |
| `volume` | `<number>` | Lowers the volume at the specified number. Max is 5.    |

### NSFW
NSFW commands won't be listed here for various reasons. To know what commands Chii has, visit `commands/nsfw`.

### Roleplay
| Command  | Arguments  | Description                                             |
|----------|------------|---------------------------------------------------------|
| `pause`  | None       | Pauses the ongoing video.                               |
| `play`   | `<name>`   | Plays a video from YouTube from the given name.         |
| `queue`  | None       | Lists the queue of videos.                              |
| `remove` | `<number>` | Removes a video from the queue with a specified number. |
| `resume` | None       | Resumes the paused video.                               |
| `skip`   | None       | Skips the current video.                                |
| `stop`   | None       | Stops what is playing and disconnects.                  |
| `volume` | `<number>` | Lowers the volume at the specified number. Max is 5.    |

## Modification:
You can modify Chii's code but make sure to leave credit on the README file or somewhere visible.

## Contribution:
Chii doesn't have an official support server for now, only a small development place used to test out features from Chii and others.
If any bugs or error pop up, feel free to open up an issue and give any important information.
If you have an idea, great! If you know how to program, feel free to add anything and open a pull request and I will see it. However, if you do not know, it's all fine! Open up an issue with the title of "New Idea" and describe the ideas, and I will look into it.


Currently, I am not looking for collaborators as I'm too lazy. However, I might consider it should I want to take Chii further.  Make sure to keep up to date. :)

## Other:

These are my personal things to keep here, so don't pay them much mind.
Invite [Chii](https://discord.com/api/oauth2/authorize?client_id=788284993759215656&permissions=1077341254&scope=bot).
(The link is personal, so don't use it to invite her.)

### Features to add:

- [ ] Remind command
- [ ] Weather command
- [ ] Random classical piece
- [ ] Giphy search
- [ ] Urban dictionary
- [ ] Translate
- [ ] Move user info to 'rank' card (mongodb)??
- [ ] Bot info

### To Do

- [ ] Style music commands
- [ ] Add roles for users (u-i command)