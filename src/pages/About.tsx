import Icon from '@/components/ui/icon';

const HERO_IMAGE = "https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/5ebbb364-af22-4b59-9fba-822d49b648c3.jpg";

const ONLINE_PHOTOS = [
  {
    src: "https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/8c73e6a7-ab69-4587-8727-7f61c77bf8c5.jpg",
    label: "Веду занятие онлайн",
    icon: "Monitor",
    color: "bg-pink-100 text-pink-600",
  },
  {
    src: "https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/36f487f6-eb45-436c-975b-2df05c11d9ac.jpg",
    label: "Ребёнок занимается дома",
    icon: "Home",
    color: "bg-blue-100 text-blue-600",
  },
  {
    src: "https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/f5b5c174-2703-4406-813a-c945633a6047.jpg",
    label: "Живой контакт через экран",
    icon: "Video",
    color: "bg-teal-100 text-teal-600",
  },
];

const skills = [
  { name: "Артикуляционная гимнастика", pct: 95, color: "bg-pink-500" },
  { name: "Коррекция звукопроизношения", pct: 90, color: "bg-blue-500" },
  { name: "Развитие речи у малышей", pct: 88, color: "bg-teal-500" },
  { name: "Работа с ОНР и ЗПР", pct: 85, color: "bg-purple-500" },
];

const certs = [
  { icon: "GraduationCap", title: "МПГУ", desc: "Дефектологический факультет, 2015 г.", color: "bg-blue-100 text-blue-500" },
  { icon: "Award", title: "Сертификат", desc: "Нейролингвистика для детей, 2021 г.", color: "bg-pink-100 text-pink-500" },
  { icon: "Star", title: "Повышение квалификации", desc: "Дислексия и дисграфия, 2023 г.", color: "bg-yellow-100 text-yellow-600" },
];

const onlinePerks = [
  { icon: "Wifi", title: "Из любой точки", desc: "Занимайтесь из дома, дачи или путешествия — нужен только интернет", color: "bg-violet-100 text-violet-600" },
  { icon: "Clock", title: "Гибкое расписание", desc: "Подбираем время под вас: утро, день, вечер — 7 дней в неделю", color: "bg-pink-100 text-pink-600" },
  { icon: "ShieldCheck", title: "Проверенный формат", desc: "Онлайн-занятия работают так же эффективно, как и очные", color: "bg-teal-100 text-teal-600" },
  { icon: "Smile", title: "Комфортная среда", desc: "Ребёнок в привычной обстановке — меньше стресса, больше прогресса", color: "bg-orange-100 text-orange-600" },
];

export default function About({ onNav }: { onNav: (p: string) => void }) {
  return (
    <div className="bubbles-bg min-h-screen">
      <div className="container mx-auto px-4 py-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-purple-100 text-purple-600 font-bold text-sm px-4 py-1.5 rounded-full mb-3">👩‍⚕️ О специалисте</div>
          <h1 className="font-baloo text-4xl md:text-5xl font-extrabold text-gradient mb-3">Обо мне</h1>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold px-5 py-2 rounded-full shadow-md">
            <Icon name="Monitor" size={16} />
            Онлайн-платформа для развития речи
          </div>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gradient-to-br from-pink-400 to-purple-600 p-8 flex flex-col items-center justify-center text-white">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                <img src={HERO_IMAGE} alt="Логопед" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-baloo text-2xl font-extrabold text-center">Мария Ивановна</h2>
              <p className="text-pink-100 text-center mt-1">Логопед-дефектолог</p>
              <div className="flex gap-3 mt-4">
                <div className="bg-white/20 rounded-xl px-3 py-2 text-center">
                  <div className="font-baloo font-bold text-2xl">8+</div>
                  <div className="text-xs text-pink-100">лет опыта</div>
                </div>
                <div className="bg-white/20 rounded-xl px-3 py-2 text-center">
                  <div className="font-baloo font-bold text-2xl">500+</div>
                  <div className="text-xs text-pink-100">детей</div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-8">
              <h3 className="font-baloo text-2xl font-bold text-slate-800 mb-4">Привет! 👋</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Я логопед-дефектолог с 8-летним опытом работы с детьми от 2 до 12 лет. Провожу занятия <strong>онлайн</strong> — через видеосвязь, удобно и эффективно прямо из дома.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Работаю с нарушениями звукопроизношения, задержкой речевого развития, заиканием и подготовкой к школе. Использую авторские методики с игровым подходом — дети сами просятся на занятия!
              </p>

              {/* Skills */}
              <div className="space-y-3">
                {skills.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-slate-700">{s.name}</span>
                      <span className="text-slate-500">{s.pct}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full transition-all duration-1000`} style={{ width: `${s.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 3 ONLINE PHOTOS ═══ */}
        <div className="mb-12">
          <h2 className="font-baloo text-2xl font-extrabold text-center text-gradient mb-2">Как проходят занятия</h2>
          <p className="text-center text-slate-500 mb-6">Всё происходит онлайн — удобно, тепло и результативно</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ONLINE_PHOTOS.map((p, i) => (
              <div key={i} className="card-hover group rounded-[1.5rem] overflow-hidden shadow-lg bg-white opacity-0 animate-slide-up" style={{ animationDelay: `${i * 120}ms`, animationFillMode: 'forwards' }}>
                <div className="relative h-52 overflow-hidden">
                  <img src={p.src} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-4 flex items-center gap-3">
                  <div className={`${p.color} w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon name={p.icon} size={18} />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ ONLINE PERKS ═══ */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-[2rem] p-8 mb-10 border border-blue-100">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold text-sm px-4 py-1.5 rounded-full mb-3">
              <Icon name="Globe" size={14} />
              Онлайн-формат
            </div>
            <h2 className="font-baloo text-2xl font-extrabold text-slate-800">Почему онлайн — это удобно?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {onlinePerks.map((perk, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4 card-hover">
                <div className={`${perk.color} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon name={perk.icon} size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-800 mb-0.5">{perk.title}</div>
                  <div className="text-sm text-slate-500 leading-relaxed">{perk.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <h2 className="font-baloo text-2xl font-extrabold text-center text-gradient-warm mb-6">Образование и сертификаты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {certs.map((c, i) => (
            <div key={i} className="card-hover bg-white rounded-3xl p-6 shadow-md flex items-start gap-4">
              <div className={`${c.color} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <Icon name={c.icon} size={22} />
              </div>
              <div>
                <div className="font-bold text-slate-800">{c.title}</div>
                <div className="text-sm text-slate-500 mt-0.5">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-[2rem] p-8 text-center text-white shadow-xl">
          <div className="text-4xl mb-3">💻</div>
          <h2 className="font-baloo text-2xl font-extrabold mb-2">Попробуем онлайн?</h2>
          <p className="text-teal-100 mb-5">Первая консультация бесплатно — просто подключитесь к видеозвонку!</p>
          <button
            onClick={() => onNav('contact')}
            className="bg-white text-teal-600 font-bold px-8 py-3 rounded-full shadow hover:scale-105 active:scale-95 transition-all"
          >
            Записаться онлайн 📅
          </button>
        </div>

      </div>
    </div>
  );
}
