import TelegramBot from 'node-telegram-bot-api';

const token = '7913527174:AAEcKaR_RtAPilJ_T0gnt0_ijZ44TlfCDGE';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello Gandu');
});