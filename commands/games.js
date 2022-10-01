const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('games')
		.setDescription('Released Games'),
	async execute(interaction) {
		
        let gameEmbed = {
            color: 0x00BBFF,
            title: 'Released Games',
            thumbnail: {
                url: 'https://cdn.discordapp.com/app-icons/924524926264807435/4e759389292fcd35e458bed2d95a1188.png?size=1024'
            },
            fields: [
                {
                    name: 'TheBlueRuby',
                    value: 'Backrooms First Contact (Windows)'
                },
                {
                    name: 'BixBox',
                    value: 'Backrooms First Contact (Scratch)'
                }
            ],

        };
		await interaction.reply({embeds: [gameEmbed]});
        
	},
};
