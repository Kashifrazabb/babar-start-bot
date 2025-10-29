import TelegramBot from 'node-telegram-bot-api';
import express from 'express';

const token = "8339068809:AAHR-oZTuvnqwym9-5U01uM3GAQTZZp0BcY";
const bot = new TelegramBot(token);
const app = express();
app.use(express.json());

// Set up Telegram webhook
bot.setWebHook(`https://babar-start-bot-xbrq.vercel.app/bot${token}`);

// Listen for Telegram updates
app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Handle /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'HELLO GANDU');
});

app.listen(3000, () => console.log('Server started'));
