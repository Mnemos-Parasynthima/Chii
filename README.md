# Meet SoulWorker Chii [Aruel]! Version 2.6

Meet SoulWorker Chii \[Aruel]! She is simple, yet feature-rich. She runs with the **[Discord.JS](https://discord.js.org/#/)** Library and the **Commando** framework.

## Table of Contents:
- [Setup](#setup)
- [Commands](#commands)
  - [Anime](#anime)
  - [Fun](#fun)
  - [Miscellaneous](#miscellaneous)
  - [Moderation](#moderation)
  - [Music](#music)
  - [Roleplay](#roleplay)
- [Modification](#modification)
- [Contribution](#contribution)
- [Other](#other)

## Setup:
1. Install [Node.js](https://nodejs.org/en/) 12 or higher if not already done so.
2. Clone or download the repository.
3. Install dependencies with `npm install` with terminal.
4. Create a discord bot application with [Discord Developer Portal](https://discordapp.com/developers/applications/).
5. Fill out the config.json file with `token`, `ownerId` (must have developer tools enabled in Discord to access it), and `prefix`. The default prefix is `chii` in order not to confuse with common prefixes such as !, -, or $. Using a mention also works as part of the Commando framework.
6. Using the link from the developer portal, invite to your server.
7. To run locally, use `npm start`. To host 24/7, I recommend using [replit](https://repl.it/) and [uptimerobot](https://uptimerobot.com/).

## Commands:

(Note: Many of the commands made were for my own purpose so feel free to change them or delete them. Some commands are not listed and such are those that were for my own purpose)

Using `<>` is required whereas `[]` is optional.

### Anime
| Command  | Arguments | Description                  |
|----------|-----------|------------------------------|
| `anime`  |   None    | Sends an anime picture.      |
| `foxgirl`|   None    | Sends a picture of a foxgirl.|
| `nekos`  |   None    | Sends a picture of a neko.   |

### Fun
| Command    | Arguments         | Description                                                           |
|------------|-------------------|-----------------------------------------------------------------------|
| `avatar`   | `[member]`        | Returns the avatar of a member, if not, then yourself.                |
| `bday`     | `<member>`        | Wishes happy birthday to someone.                                     |
| `classical`| None              | Sends a random classical piece.                                       |
| `fate`     | None              | Returns a fate based on a question.                                   |
| `holiday`  | `[holiday]`       | Sends a happy [holiday], if no arguments, sends 'Happy Holidays!'     |
| `kaomoji`  | None              | Sends a japanese emoji from a collection of emojis. (=^-ω-^=)         |
| `lewd`     | None              | Sends a GIF of Oh how lewd!                                           |
| `poll`     | None              | Makes a thumbs up or thumbs down poll based on the previous message.  |
| `praise`   | `[member]`        | Praises whoever is tagged, if not, it defaults to Chii.               |
| `randnum`  | `<min><max>`      | Returns a random number between the specified limits.                 |
| `rate`     | `<member>`        | Rates someone's usefulness or uselessness.                            |
| `say`      | None              | Makes Chii say something on her own.                                  |
| `shocked`  | `<member>`        | Sends a GIF of a shocked anime face.                                  |
| `tempconv` | `<base><to><num>` | Converts a given temperature to either Celsius, Fahrenheit, or Kelvin.|
| `urban`    | `<query>`         | Sends an Urban dictionary definition for the provided query.          |

### Miscellaneous
| Command    | Arguments         | Description                                               |
|------------|-------------------|-----------------------------------------------------------|
| `fight`    | `<member>`        | Makes Chii fight someone.                                 |
| `hiss`     | `<member>`        | Intimidates someone, hiisss!!                             |
| `puppet`   | `<line>`          | Makes Chii say what is provided in capitalized and quoted.|
| `react`    | `<reaction>`      | Sends an image as a reaction.                             |

### Moderation
| Command     | Arguments        | Description                                                                               |
|-------------|------------------|-------------------------------------------------------------------------------------------|
| `ban`       | `<member>`       | Bans a member.                                                                            |
| `help`      | `[command name]` | Sends a list of commands. When supplied a command name, it sends info about that command. |
| `kick`      | `<member>`       | Kicks a member.                                                                           |
| `server`    | None             | Sends information about the server.                                                       |
| `slash`     | `<number>`       | Deletes up to 100 messages.                                                               |
| `snipe`     | None           | Retrieves recently deleted message.                                                         |
| `user-info` | None             | Sends information about oneself.                                                          |

### Music
NOTE: Music commands are currently not working until next major update!
| Command  | Arguments  | Description                                            |
|----------|------------|--------------------------------------------------------|
| `pause`  | None       | Pauses the ongoing video.                              |
| `play`   | `<name>`   | Plays a video from YouTube from the given name.        |
| `queue`  | None       | Lists the queue of videos.                             |
| `remove` | `<number>` | Removes a video from the queue with a specified number.|
| `resume` | None       | Resumes the paused video.                              |
| `skip`   | None       | Skips the current video.                               |
| `stop`   | None       | Stops what is playing and disconnects.                 |
| `volume` | `<number>` | Lowers the volume at the specified number. Max is 5.   |

### Roleplay
| Command  | Arguments  | Description                                              |
|----------|------------|----------------------------------------------------------|
| `attack` | `<member>` | Makes Chii attack someone. (poor them!)                  |
| `baka`   | `<member>` | Baaaaaaaaaka                                             |
| `hug`    | `<member>` | Hug someone....because they deserve it                   |
| `isekai` | `[member]` | Get sent to another world...or another person            |
| `pat`    | `<member>` | Pat someone on their head.                               |
| `poke`   | `<member>` | Poke someone.                                            |
| `slap`   | `<member>` | Slap someone because they're annoying or they deserve it.|
| `smug`   | None       | What a quite smug face.                                  |
| `stare`  | None       | Stare at someone....*jiiiiiiiiiiiii*                     |
| `tickle` | `<member>` | Tickle someone to make them laugh.                       |

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

- [ ] Translate

### To Do

- [ ] Style and fix music commands
- [ ] Work on DiscordJS v14 and Sapphire (seperate dev branch) IMPORTANT!
- [ ] MongoDB (v4) after DJS14/Sapphire (v3)
- [ ] Move user info to 'rank' card (mongodb)
- [ ] Add roles to users (u-i command, after mongodb)