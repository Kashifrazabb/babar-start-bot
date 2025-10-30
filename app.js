import TelegramBot from 'node-telegram-bot-api';

const token = '7913527174:AAEcKaR_RtAPilJ_T0gnt0_ijZ44TlfCDGE';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `
🔥📝 Want 10 FREE NON MTG BUG Quotex Signals?

👉 Click on JOIN CHANNEL now! And you will get FREE 10 QUOTEX SIGNALS

🔗 LINK : 👇👇👇👇
https://t.me/+qkq-lwa5ycQyODRk
https://t.me/+qkq-lwa5ycQyODRk

📈 Signals starting in 5 Minutes`);
});