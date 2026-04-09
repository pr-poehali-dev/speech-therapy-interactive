import { useState } from 'react';
import Icon from '@/components/ui/icon';

const DINO_IMAGE = "https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/28cc8f5f-91a5-4fdb-8ed1-4047556653ff.jpg";

const heroReview = {
  name: "Светлана М.",
  child: "мама Артёма, 6 лет",
  avatar: "С",
  avatarColor: "bg-teal-400",
  text: "Артём готовился к школе с серьёзными проблемами речи. Сейчас читает, говорит чётко, учительница восхищается. За 4 месяца — результат, о котором мы только мечтали. Огромное спасибо Марии Ивановне!",
  tag: "Подготовка к школе",
};

const carouselReviews = [
  {
    name: "Анна К.",
    child: "мама Миши, 4 года",
    text: "Миша заговорил чисто! Раньше «р» вообще не было, теперь стрекочет как пулемёт. Мария Ивановна — волшебница!",
    rating: 5,
    avatar: "А",
    avatarColor: "bg-pink-400",
    tag: "Коррекция Р",
    tagColor: "bg-pink-100 text-pink-600",
    gradient: "from-pink-400 to-rose-400",
  },
  {
    name: "Дмитрий В.",
    child: "папа Алисы, 5 лет",
    text: "Дочка боялась занятий, но здесь всё через игру. Теперь сама просится «к логопеду поиграть». Прогресс невероятный!",
    rating: 5,
    avatar: "Д",
    avatarColor: "bg-blue-400",
    tag: "ЗРР",
    tagColor: "bg-blue-100 text-blue-600",
    gradient: "from-blue-400 to-indigo-400",
  },
  {
    name: "Ольга П.",
    child: "мама Сони, 3 года",
    text: "Соня почти не говорила в 2.5 года. После полугода занятий рассказывает стихи и поёт песенки. Рекомендую всем!",
    rating: 5,
    avatar: "О",
    avatarColor: "bg-purple-400",
    tag: "Малыши",
    tagColor: "bg-purple-100 text-purple-600",
    gradient: "from-purple-400 to-violet-400",
  },
  {
    name: "Игорь Т.",
    child: "папа Лёши, 7 лет",
    text: "Заикание у сына было с 4 лет. Думали, что навсегда. За год работы с Марией Ивановной всё прошло. Это просто чудо!",
    rating: 5,
    avatar: "И",
    avatarColor: "bg-orange-400",
    tag: "Заикание",
    tagColor: "bg-orange-100 text-orange-600",
    gradient: "from-orange-400 to-amber-400",
  },
  {
    name: "Елена Ж.",
    child: "мама Насти, 5 лет",
    text: "Онлайн-занятия работают не хуже очных! Настя занимается дома в уютной обстановке, и раскрепощается намного быстрее.",
    rating: 5,
    avatar: "Е",
    avatarColor: "bg-green-400",
    tag: "Онлайн",
    tagColor: "bg-green-100 text-green-600",
    gradient: "from-green-400 to-teal-400",
  },
];

const wallReviews = [
  { name: "Марина С.", child: "мама Лизы, 4 года", text: "Лиза теперь говорит «р» — мы плакали от счастья на первом же занятии, где это получилось!", avatar: "М", color: "bg-pink-400", bg: "bg-pink-50", border: "border-pink-200", tag: "❤️", size: "tall" },
  { name: "Павел Н.", child: "папа Кости, 5 лет", text: "Отличный специалист. Костя занимается с удовольствием.", avatar: "П", color: "bg-blue-400", bg: "bg-blue-50", border: "border-blue-200", tag: "👍", size: "short" },
  { name: "Наталья Р.", child: "мама Вани, 6 лет", text: "Ваня не хотел говорить вообще. Сейчас болтает без умолку! Спасибо за терпение и любовь к детям.", avatar: "Н", color: "bg-teal-400", bg: "bg-teal-50", border: "border-teal-200", tag: "🌟", size: "short" },
  { name: "Кира Л.", child: "мама Пети, 3 года", text: "Петя пошёл к логопеду в 3 года с задержкой речи. Занимались 8 месяцев онлайн — и сейчас перед школой у него нет ни одной проблемы. Абсолютный восторг!", avatar: "К", color: "bg-violet-400", bg: "bg-violet-50", border: "border-violet-200", tag: "🏆", size: "tall" },
  { name: "Андрей М.", child: "папа Даши, 5 лет", text: "Даша научилась произносить шипящие. Рекомендуем!", avatar: "А", color: "bg-orange-400", bg: "bg-orange-50", border: "border-orange-200", tag: "⭐", size: "short" },
  { name: "Юлия В.", child: "мама Тимы, 7 лет", text: "Тима — молчун по природе. Но логопед нашла подход! Теперь он охотно читает вслух и участвует в утренниках.", avatar: "Ю", color: "bg-rose-400", bg: "bg-rose-50", border: "border-rose-200", tag: "💫", size: "short" },
];

const stats = [
  { num: "500+", label: "счастливых детей", emoji: "👧" },
  { num: "8 лет", label: "опыта работы", emoji: "⭐" },
  { num: "98%", label: "довольных родителей", emoji: "❤️" },
  { num: "1 мес", label: "первые результаты", emoji: "🚀" },
];

export default function Reviews({ onNav }: { onNav: (p: string) => void }) {
  const [slide, setSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', text: '' });
  const [sent, setSent] = useState(false);

  const prev = () => setSlide(s => (s - 1 + carouselReviews.length) % carouselReviews.length);
  const next = () => setSlide(s => (s + 1) % carouselReviews.length);
  const cur = carouselReviews[slide];

  return (
    <div className="bubbles-bg min-h-screen">
      <div className="container mx-auto px-4 py-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-yellow-100 text-yellow-700 font-bold text-sm px-4 py-1.5 rounded-full mb-3">⭐ Отзывы</div>
          <h1 className="font-baloo text-4xl md:text-5xl font-extrabold text-gradient mb-3">Что говорят родители?</h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">Реальные истории реальных семей</p>
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

        {/* ═══ 1. HERO QUOTE ═══ */}
        <div className="relative mb-12 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl p-8 md:p-12">
          {/* Big quote mark */}
          <div className="absolute top-4 left-6 font-baloo text-[8rem] leading-none text-white/5 select-none pointer-events-none">"</div>
          <div className="absolute bottom-4 right-8 font-baloo text-[8rem] leading-none text-white/5 select-none pointer-events-none">"</div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className={`${heroReview.avatarColor} w-20 h-20 rounded-full flex items-center justify-center text-white font-baloo font-extrabold text-3xl shadow-xl ring-4 ring-white/20`}>
                {heroReview.avatar}
              </div>
              <div className="text-center">
                <div className="font-bold text-white text-base">{heroReview.name}</div>
                <div className="text-slate-400 text-xs">{heroReview.child}</div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Icon key={j} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full mb-4">{heroReview.tag}</div>
              <p className="font-baloo text-xl md:text-2xl font-bold text-white leading-relaxed">
                «{heroReview.text}»
              </p>
            </div>
          </div>
        </div>

        {/* ═══ 2. CAROUSEL ═══ */}
        <div className="mb-12">
          <h2 className="font-baloo text-2xl font-extrabold text-center text-gradient-warm mb-6">Истории наших семей</h2>

          <div className={`relative bg-gradient-to-br ${cur.gradient} rounded-[2rem] p-8 shadow-xl text-white overflow-hidden`}>
            {/* Deco circles */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className={`${cur.avatarColor} w-16 h-16 rounded-full flex items-center justify-center text-white font-baloo font-extrabold text-2xl shadow-xl ring-4 ring-white/30`}>
                  {cur.avatar}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex gap-0.5 justify-center md:justify-start mb-3">
                  {Array.from({ length: cur.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={16} className="text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <p className="font-baloo text-xl font-bold leading-relaxed mb-4">«{cur.text}»</p>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="font-bold text-white/90">{cur.name}</span>
                  <span className="text-white/60 text-sm">·</span>
                  <span className="text-white/60 text-sm">{cur.child}</span>
                  <span className={`${cur.tagColor} text-xs font-bold px-2.5 py-1 rounded-full ml-1`}>{cur.tag}</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={prev} className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95">
                <Icon name="ChevronLeft" size={20} />
              </button>
              <div className="flex gap-2">
                {carouselReviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`rounded-full transition-all ${i === slide ? 'bg-white w-6 h-2.5' : 'bg-white/40 w-2.5 h-2.5'}`}
                  />
                ))}
              </div>
              <button onClick={next} className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95">
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ═══ 3. PINTEREST WALL ═══ */}
        <div className="mb-12">
          <h2 className="font-baloo text-2xl font-extrabold text-center text-gradient mb-6">Ещё отзывы</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {wallReviews.map((r, i) => (
              <div
                key={i}
                className={`break-inside-avoid ${r.bg} border ${r.border} rounded-3xl p-5 shadow-sm card-hover opacity-0 animate-slide-up delay-${(i + 1) * 100}`}
                style={{ animationFillMode: 'forwards' }}
              >
                <div className="text-2xl mb-3">{r.tag}</div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">«{r.text}»</p>
                <div className="flex items-center gap-2.5">
                  <div className={`${r.color} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-800">{r.name}</div>
                    <div className="text-xs text-slate-400">{r.child}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Icon key={j} name="Star" size={11} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dino CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-[2rem] p-6 mb-8 shadow-xl text-white">
          <img src={DINO_IMAGE} alt="Дино" className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg flex-shrink-0 animate-wiggle" />
          <div>
            <div className="font-baloo text-xl font-extrabold mb-1">Дино тоже рад за вас! 🦕</div>
            <div className="text-orange-100 text-sm">Каждый отзыв — это победа маленького человека. Присоединяйтесь!</div>
          </div>
          <button
            onClick={() => onNav('contact')}
            className="ml-auto flex-shrink-0 bg-white text-orange-500 font-bold px-6 py-3 rounded-full shadow hover:scale-105 transition-all whitespace-nowrap"
          >
            Записаться 📅
          </button>
        </div>

        {/* Leave review form */}
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
