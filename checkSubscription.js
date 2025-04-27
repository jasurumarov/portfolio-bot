const checkSubscription = async (ctx, next) => {
    const channel = "@JasurCodes";
    const userId = ctx.from.id;

    try {
        const chatMember = await ctx.telegram.getChatMember(channel, userId);
        if (['administrator', 'member', 'owner', 'creator'].includes(chatMember.status)) {
            await next();
        } else {
            return ctx.reply(
                `❗ Botdan foydalanish uchun avval kanalga a'zo bo‘lishingiz kerak.\n\n👉 Kanal: ${channel}`
            );
        }
    } catch (error) {
        console.log(error);
        return ctx.reply(
            "⚠️ Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring."
        );
    }
};

module.exports = checkSubscription;