const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('projects')
		.setDescription('Current Projects'),
	async execute(interaction) {
		
        let projectEmbed = {
            color: 0x00BBFF,
            title: 'Project info',
            thumbnail: {
                url: 'https://cdn.discordapp.com/app-icons/924524926264807435/4e759389292fcd35e458bed2d95a1188.png?size=1024'
            },
            fields: [
                {
                    name: 'TheBlueRuby',
                    value: 'Yet Another Metroidvania'
                },
                {
                    name: 'Zaethar',
                    value: 'Red'
                },
                {
                    name: 'BixBox',
                    value: 'Rats Series'
                }
            ],

        };
		await interaction.reply({embeds: [projectEmbed]});
        
	},
};
