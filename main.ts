import { Bot } from "https://deno.land/x/grammy/mod.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN"));

console.log("✅ Drunk Time Machine Inline Bot запущен");

bot.on("inline_query", async (ctx) => {
    const query = ctx.inlineQuery.query.trim();
    if (!query) return;

    const distance = parseInt(query) || Math.floor(Math.random() * 1500) + 300;
    const drunk = Math.floor(Math.random() * 80) + 15;

    const photoUrl = "https://i.imgur.com/ioUSGGJ.jpg";

    await ctx.answerInlineQuery([{
        type: "photo",
        id: "share_" + Date.now(),
        photo_url: photoUrl,
        thumb_url: photoUrl,
        caption: `Я проехал ${distance} метров в пьяном угаре!\n\nУровень опьянения: ${drunk}%\n\nТы сможешь лучше? 😏\n\n→ Играй в Time Machine`,
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [[
                { 
                    text: "🚗 Запустить Time Machine", 
                    url: "https://t.me/drunk_timemachine_bot/game" 
                }
            ]]
        }
    }]);
});

bot.start();
