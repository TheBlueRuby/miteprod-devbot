const { SlashCommandBuilder } = require('discord.js');
const fetch = require('node-fetch');

async function createGamesEmbed () {
    let apiData = await updateGameData();

    let gameEmbedData = [];

    apiData.forEach((game) => {
        let gameEntry = {
            name: game.displayName,
            value: 'by ' + game.author + '\n\n' + game.desc + '\n'
        };
        gameEmbedData.push(gameEntry);
    });

    console.log('\n' + gameEmbedData);
    return gameEmbedData;

}

async function updateGameData() {
    let apiUrl = "https://miteprod-api.vercel.app/";

    let gamesListObj = await grabData(apiUrl + "games/");
    let gamesList = gamesListObj.games;

    let games = [];

    for (let i = 0; i < gamesList.length; i++) {
        games[i] = await grabData(apiUrl + "games/" + gamesList[i] + "/");
    }

    return games;
}

async function grabData(apiUrl) {
    try {
        let res = await fetch(apiUrl);
        return await res.json();
    } catch (error) {
        console.error(error);
        return error;
    }
}

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
            fields: await createGamesEmbed(),

        };
		await interaction.reply({embeds: [gameEmbed]});
        
	},
};
