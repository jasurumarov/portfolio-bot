require('dotenv').config()

const { Telegraf, Markup } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

const keyboard = Markup.inlineKeyboard([
    [
        Markup.button.callback("🧑‍💻 About me", "about"),
        Markup.button.callback("📂 Portfolio", "portfolio"),
        Markup.button.callback("📞 Contact", "contact")
    ]
])
const updateKeyboard = Markup.inlineKeyboard([
    Markup.button.callback("⬅️ Back", "back"),
    Markup.button.url("🔗 GitHub", "https://github.com/jasurumarov")
])

bot.action("about", ctx => {
    const message = ctx.callbackQuery.message
    ctx.telegram.editMessageText(
        message.chat.id,
        message.message_id,
        null,
        `<b>👨‍💻 Jasurbek Umarov</b>

🌐 Frontend Developer | React & TypeScript

🚀 <b>Experience:</b>
    • AIKO — admin panel, CRM, and Shopify integration  
    • DARROV — restuarants dashboard, control orders and menu

🎓 <b>Education:</b>
    • School21 — C, Linux, algorithms  
    • Najot Ta'lim — HTML, CSS, JS, React, Next.js

🛠️ <b>Hard Skills:</b>
    • React, Next.js, Tailwind CSS, Redux Toolkit  
    • Git, Figma, TypeScript, JavaScript, C

📧 <b>Email:</b> jasurumarov199@gmail.com  
📞 <b>Tel:</b> +998-94-291-86-46  
🔗 <b>LinkedIn:</b> linkedin.com/in/jasurumarov  
💻 <b>GitHub:</b> github.com/jasurumarov
`,
        {
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: updateKeyboard.reply_markup
        }

    )
})
bot.action("portfolio", ctx => {
    const message = ctx.callbackQuery.message
    ctx.telegram.editMessageText(
        message.chat.id,
        message.message_id,
        null,
        `<b>🧩 Portfolio:</b>

🔗 <a href="https://aikoaroma.uz">Aiko – Admin panel for managing products and branches</a>
🔗 <a href="http://partner.nozamsoft.uz">DARROV – Food delivery system for entrepreneurs</a>
`, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        reply_markup: updateKeyboard.reply_markup
    }
    )
})
bot.action("contact", ctx => {
    const message = ctx.callbackQuery.message
    ctx.telegram.editMessageText(
        message.chat.id,
        message.message_id,
        null,
        `
<b>📞 Contact:</b>

📧 Email: jasurcoder@gmail.com\n📞 Tel: +998-94-291-86-46
        `,
        { reply_markup: updateKeyboard.reply_markup, parse_mode: 'HTML', }
    )
})
bot.action("back", ctx => {
    ctx.editMessageText(
        `${ctx.chat.first_name} — Welcome to Jasur's portfolio bot ⚡`,
        { parse_mode: 'HTML', reply_markup: keyboard.reply_markup }
    )
})

bot.start((ctx) => {
    ctx.reply(ctx.chat.first_name + " — Welcome to Jasur's portfolio bot ⚡", keyboard)
})

bot.launch()