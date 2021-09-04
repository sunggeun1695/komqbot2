const { Client } = require('discord.js');
const client = new Client();
const token = '토큰';

client.on('ready', () => {
    console.log('on')
});

client.on('message', (message) => {
    if(message.content == "ping") {
        message.reply('pong');
    };
});

client.login(token);