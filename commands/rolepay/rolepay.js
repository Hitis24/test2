

// Kiss command


// Clap command
module.exports.clap = {
  name: 'clap',
  description: 'Clap for someone or something',
  execute(message, args) {
    const clappingText = args.join(' ') || 'Someone did something amazing!';
    const clapEmbed = new MessageEmbed()
      .setDescription(`👏 ${clappingText} 👏`);

    return message.channel.send({ embeds: [clapEmbed] });
  },
};

// Slap command

