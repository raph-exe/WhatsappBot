const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();
const axios = require('axios');

const BotName = "John";

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', async message => {
    axios.get(`https://api.affiliateplus.xyz/api/chatbot?message=${message.body}&botname=${BotName}&ownername=${BotName}&user=${message.from}`).then(res => {
        message.reply(res.data.message);
    })
});