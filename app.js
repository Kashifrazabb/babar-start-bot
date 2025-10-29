import TelegramBot from 'node-telegram-bot-api';

const token = "8339068809:AAHR-oZTuvnqwym9-5U01uM3GAQTZZp0BcY";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'HELLO GANDU');
});