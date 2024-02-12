module.exports = {
  name: "say",
  description: "Make the bot say something",
  category: "fun",
  usage: "say <text>",
  run: async (client, message, args) => {
    if (!args.length) {
      return message.reply({
        embed: {
          color: "ff0000",
          description: `:crossed_swords: **${message.member.user.username}** Please provide some text to say`
        }
      });
    }

    const textToSay = args.join(" ");

    // Delete the original command message
    message.delete().catch(console.error);

    // Send the specified text
    message.channel.send(textToSay);
  }
};
module.exports = {
  name: "say",
  description: "Make the bot say something",
  category: "fun",
  usage: "say <text>",
  run: async (client, message, args) => {
    if (!args.length) {
      return message.reply({
        embed: {
          color: "ff0000",
          description: `:crossed_swords: **${message.member.user.username}** Please provide some text to say`
        }
      });
    }

    const textToSay = args.join(" ");

    // Delete the original command message
    message.delete().catch(console.error);

    // Send the specified text
    message.channel.send(textToSay);
  }
};
