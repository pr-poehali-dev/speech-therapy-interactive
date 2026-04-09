import { useState } from 'react';
import Icon from '@/components/ui/icon';

const DINO_IMAGE = "https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/28cc8f5f-91a5-4fdb-8ed1-4047556653ff.jpg";

const reviews = [
  {
    name: "Анна К.",
    child: "мама Миши, 4 года",
    text: "Мы занимались 3 месяца — и Миша заговорил чисто! Раньше «р» вообще не было, теперь стрекочет как пулемёт. Мария Ивановна — волшебница!",
    rating: 5,
    color: "from-pink-50 to-rose-50",
    border: "border-pink-200",
    avatar: "А",
    avatarColor: "bg-pink-400",
    tag: "Коррекция Р",
    tagColor: "bg-pink-100 text-pink-600",
  },
  {
    name: "Дмитрий В.",
    child: "папа Алисы, 5 лет",
    text: "Дочка очень боялась занятий, но здесь всё через игру. Теперь сама просится «к логопеду поиграть». За 2 месяца прогресс невероятный!",
    rating: 5,
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    avatar: "Д",
    avatarColor: "bg-blue-400",
    tag: "ЗРР",
    tagColor: "bg-blue-100 text-blue-600",
  },
  {
    name: "Светлана М.",
    child: "мама Артёма, 6 лет",
    text: "Артём готовился к школе с серьёзными проблемами речи. Сейчас читает, говорит чётко, учительница восхищается. Огромное спасибо!",
    rating: 5,
    color: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
    avatar: "С",
    avatarColor: "bg-teal-400",
    tag: "Подготовка к школе",
    tagColor: "bg-teal-100 text-teal-600",
  },
  {
    name: "Ольга П.",
    child: "мама Сони, 3 года",
    text: "Соня почти не говорила в 2.5 года. После полугода занятий — рассказывает стихи и поёт песенки. Рекомендую всем!",
    rating: 5,
    color: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    avatar: "О",
    avatarColor: "bg-purple-400",
    tag: "Малыши",
    tagColor: "bg-purple-100 text-purple-600",
  },
  {
    name: "Игорь Т.",
    child: "папа Лёши, 7 лет",
    text: "Заикание у сына было с 4 лет. Думали, что навсегда. Но за год работы с Марией Ивановной всё прошло. Это просто чудо!",
    rating: 5,
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    avatar: "И",
    avatarColor: "bg-orange-400",
    tag: "Заикание",
    tagColor: "bg-orange-100 text-orange-600",
  },
  {
    name: "Елена Ж.",
    child: "мама Насти, 5 лет",
    text: "Онлайн-занятия работают не хуже очных! Настя занимается дома в уютной обстановке, и это ей помогает раскрепоститься. Отличный формат!",
    rating: 5,
    color: "from-green-50 to-emerald-50",
    border: "border-green-200",
    avatar: "Е",
    avatarColor: "bg-green-400",
    tag: "Онлайн",
    tagColor: "bg-green-100 text-green-600",
  },
];

const stats = [
  { num: "500+", label: "счастливых детей", emoji: "👧" },
  { num: "8 лет", label: "опыта работы", emoji: "⭐" },
  { num: "98%", label: "довольных родителей", emoji: "❤️" },
  { num: "1 мес", label: "первые результаты", emoji: "🚀" },
];

export default function Reviews({ onNav }: { onNav: (p: string) => void }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', text: '' });
  const [sent, setSent] = useState(false);

  return (
    <div className="bubbles-bg min-h-screen">
      <div className="container mx-auto px-4 py-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-yellow-100 text-yellow-700 font-bold text-sm px-4 py-1.5 rounded-full mb-3">⭐ Отзывы</div>
          <h1 className="font-baloo text-4xl md:text-5xl font-extrabold text-gradient mb-3">Что говорят родители?</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">Реальные истории реальных семей — лучшие отзывы!</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="card-hover bg-white rounded-3xl p-5 text-center shadow-md">
              <div className="text-3xl mb-1">{s.emoji}</div>
              <div className="font-baloo font-extrabold text-3xl text-gradient">{s.num}</div>
              <div className="text-sm text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`card-hover bg-gradient-to-br ${r.color} border ${r.border} rounded-3xl p-6 shadow-sm opacity-0 animate-slide-up delay-${(i % 6 + 1) * 100}`}
              style={{ animationFillMode: 'forwards' }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Icon key={j} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-4">«{r.text}»</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`${r.avatarColor} w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-800">{r.name}</div>
                    <div className="text-xs text-slate-500">{r.child}</div>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${r.tagColor}`}>{r.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dino quote */}
        <div className="flex flex-col sm:flex-row items-center gap-5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-[2rem] p-6 mb-8 shadow-xl text-white">
          <img src={DINO_IMAGE} alt="Дино" className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg flex-shrink-0 animate-wiggle" />
          <div>
            <div className="font-baloo text-xl font-extrabold mb-1">Дино тоже рад за вас! 🦕</div>
            <div className="text-orange-100 text-sm">Каждый отзыв — это победа маленького человека. Присоединяйтесь к нашей дружной семье!</div>
          </div>
          <button
            onClick={() => onNav('contact')}
            className="ml-auto flex-shrink-0 bg-white text-orange-500 font-bold px-6 py-3 rounded-full shadow hover:scale-105 transition-all whitespace-nowrap"
          >
            Записаться 📅
          </button>
        </div>

        {/* Leave review */}
        <div className="bg-white rounded-[2rem] shadow-xl p-8 max-w-xl mx-auto">
          {!showForm && !sent && (
            <div className="text-center">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="font-baloo text-2xl font-extrabold text-slate-800 mb-2">Были у нас?</h3>
              <p className="text-slate-500 mb-5">Поделитесь своей историей — это поможет другим родителям!</p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-8 py-3 rounded-full shadow hover:scale-105 transition-all"
              >
                Оставить отзыв ⭐
              </button>
            </div>
          )}

          {showForm && !sent && (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <h3 className="font-baloo text-2xl font-extrabold text-slate-800 mb-4">Ваш отзыв</h3>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Ваше имя</label>
                <input
                  type="text" required value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Имя и первая буква фамилии"
                  className="w-full border-2 border-slate-200 focus:border-yellow-400 rounded-2xl px-4 py-3 text-slate-800 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Ваша история</label>
                <textarea
                  rows={4} required value={form.text}
                  onChange={e => setForm({ ...form, text: e.target.value })}
                  placeholder="Расскажите о вашем опыте..."
                  className="w-full border-2 border-slate-200 focus:border-yellow-400 rounded-2xl px-4 py-3 text-slate-800 outline-none transition-colors resize-none"
                />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-lg py-3.5 rounded-2xl shadow hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all">
                Отправить отзыв ⭐
              </button>
            </form>
          )}

          {sent && (
            <div className="text-center py-6 animate-bounce-in">
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="font-baloo text-2xl font-extrabold text-slate-800 mb-2">Спасибо!</h3>
              <p className="text-slate-500">Ваш отзыв поможет другим родителям принять решение</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
