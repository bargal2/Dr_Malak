import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cardsData = [
    { id: 1, frontIcon: "❤️", text: "بحبك", backContent: "أنتي أجمل حاجة حصلتلي", color: "from-pink-500 to-rose-600" },
    { id: 2, frontIcon: "✨", text: "بموت فيكي", backContent: "ضحكتك هي السبب اللي بيخليني أبتسم كل يوم", color: "from-purple-500 to-indigo-600" },
    { id: 3, frontIcon: "🔒", text: "بعشقك", backContent: "قلبي ملكك لوحدك، للأبد", color: "from-red-500 to-pink-600" },
];

const LoveCards = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 bg-[#030014] overflow-hidden">
            {/* إضاءة خلفية هادئة وسريعة للأداء */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="z-10 text-center mb-16"
            >
                <div className="inline-block px-4 py-1 mb-4 rounded-full border border-pink-500/20 bg-pink-500/10">
                    <span className="text-pink-400 text-xs tracking-[0.3em] uppercase font-bold">Secret Feelings</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                    رسائل من <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500">قلبي</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
                    كل كارت يحمل سراً صغيراً .. اضغطي لتكتشفي ما وراء الكلمات
                </p>
            </motion.div>

            <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
                {cardsData.map((card, index) => (
                    <LoveCard key={card.id} card={card} index={index} />
                ))}
            </div>

            <footer className="mt-20 z-10 opacity-30 text-white tracking-[0.8em] text-[10px] uppercase font-mono">
                Forever & Always
            </footer>
        </section>
    );
};

const LoveCard = ({ card, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group relative w-full h-[420px] [perspective:1000px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full will-change-transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                    rotateY: isFlipped ? 180 : 0,
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    y: { duration: 0.5, delay: index * 0.1 }
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* الواجهة الأمامية (Front) */}
                <div
                    className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0d0722] p-8 flex flex-col items-center justify-center text-center shadow-xl"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden"
                    }}
                >
                    {/* خلفية تدرج ناعمة */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    {/* أيقونة شاحبة كخلفية */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] opacity-[0.03] select-none pointer-events-none">
                        {card.frontIcon}
                    </div>

                    <div className="text-7xl mb-6 filter drop-shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-transform duration-300 group-hover:scale-110">
                        {card.frontIcon}
                    </div>

                    <h3 className="text-3xl font-black text-white mb-3 tracking-wide">{card.text}</h3>
                    <div className="w-10 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6" />

                    <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-[0.3em] uppercase font-mono">
                        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                        اضغطي للفتح
                    </div>
                </div>

                {/* الواجهة الخلفية (Back) */}
                <div
                    className="absolute inset-0 w-full h-full rounded-[2.5rem] border border-pink-500/30 overflow-hidden bg-[#0c041d] p-8 flex flex-col items-center justify-center text-center shadow-2xl"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden"
                    }}
                >
                    {/* توهج الألوان في الخلفية */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-15`} />

                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <span className="text-pink-400 text-3xl mb-4 opacity-80">✨</span>

                        <p className="text-xl md:text-2xl font-bold text-pink-50 leading-relaxed mb-6 font-sans">
                            {card.backContent}
                        </p>

                        <div className="flex flex-col items-center gap-1 mt-2">
                            <span className="text-pink-400 font-serif italic text-lg tracking-wider">Love, Always</span>
                            <div className="h-[2px] w-8 bg-pink-500/40 rounded-full" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoveCards;