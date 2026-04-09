const news = [
  {
    date: "5 апреля 2026",
    category: "Мероприятие",
    catColor: "bg-pink-100 text-pink-600",
    title: "День открытых дверей в апреле!",
    desc: "Приглашаем всех желающих познакомиться с нашим кабинетом, методиками и специалистом. Вход свободный!",
    emoji: "🎪",
    cardColor: "from-pink-50 to-rose-50",
    borderColor: "border-pink-200",
  },
  {
    date: "28 марта 2026",
    category: "Новые игры",
    catColor: "bg-blue-100 text-blue-600",
    title: "Запустили раздел с интерактивными играми",
    desc: "Теперь дети могут тренировать речь онлайн! Скороговорки, упражнения и задания с картинками.",
    emoji: "🎮",
    cardColor: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
  },
  {
    date: "15 марта 2026",
    category: "Советы",
    catColor: "bg-teal-100 text-teal-600",
    title: "5 упражнений для дома",
    desc: "Делимся простыми и эффективными упражнениями, которые можно делать каждый день без специалиста.",
    emoji: "🏠",
    cardColor: "from-teal-50 to-cyan-50",
    borderColor: "border-teal-200",
  },
  {
    date: "1 марта 2026",
    category: "Достижение",
    catColor: "bg-yellow-100 text-yellow-700",
    title: "100 счастливых семей!",
    desc: "Мы помогли уже 100 семьям! Каждый ребёнок уникален — и каждая победа особенная.",
    emoji: "🏆",
    cardColor: "from-yellow-50 to-amber-50",
    borderColor: "border-yellow-200",
  },
  {
    date: "14 февраля 2026",
    category: "Праздник",
    catColor: "bg-purple-100 text-purple-600",
    title: "Открытка-скороговорка к 14 февраля",
    desc: "Подарили нашим маленьким ученикам весёлые карточки с романтичными скороговорками!",
    emoji: "💝",
    cardColor: "from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
  },
];

export default function News() {
  return (
    <div className="bubbles-bg min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="inline-block bg-orange-100 text-orange-600 font-bold text-sm px-4 py-1.5 rounded-full mb-3">📰 Новости</div>
          <h1 className="font-baloo text-4xl md:text-5xl font-extrabold text-gradient mb-3">Что нового?</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">Следи за нашими новостями, советами и событиями!</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-5">
          {news.map((item, i) => (
            <div
              key={i}
              className={`card-hover bg-gradient-to-br ${item.cardColor} border ${item.borderColor} rounded-3xl p-6 shadow-sm opacity-0 animate-slide-up delay-${(i+1)*100}`}
              style={{animationFillMode:'forwards'}}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{item.emoji}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`${item.catColor} text-xs font-bold px-2.5 py-1 rounded-full`}>{item.category}</span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="font-baloo font-bold text-lg text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-slate-400 text-sm">
          🌈 Следите за обновлениями — скоро будет ещё больше новостей!
        </div>
      </div>
    </div>
  );
}
