import type { Locale } from "./services";

export type StaticPage = { title: string; description: string; eyebrow: string; h1: string; lead: string };

export const pages: Record<Locale, Record<"services" | "pricing" | "team" | "faq" | "contact" | "privacy" | "thanks", StaticPage>> = {
  uz: {
    services: {
      title: "Buxgalteriya xizmatlari, Toshkent | Sifat Buxgalter",
      description: "MChJ uchun buxgalteriya xizmatlari: hisob va hisobotlar, soliqni kamaytirish, tekshiruv va nizolar, kadrlar, tashqi savdo. Bitta shartnoma, savolga 10 daqiqada javob. Toshkent.",
      eyebrow: "Xizmatlar · Toshkent",
      h1: "Butun buxgalteriya bitta shartnomada",
      lead: "Har bir xizmat uchun alohida sahifa: kimga kerak, nima kiradi, qanday ishlaymiz, narxi qancha. Nimadan boshlashni bilmasangiz, ekspress-auditdan boshlaymiz.",
    },
    pricing: {
      title: "Buxgalteriya xizmati narxi, Toshkent",
      description: "Buxgalteriya xizmati narxi hujjatlar hajmiga bogʻliq, aylanmaga emas. Tejalgan soliqdan foiz olmaymiz, yashirin toʻlovlar yoʻq. Aniq raqamni birinchi suhbatda aytamiz.",
      eyebrow: "Narx",
      h1: "Narx aylanmaga emas, ish hajmiga bogʻliq",
      lead: "Tayyor tariflar yoʻq, bu ataylab shunday. Narxni oylik hujjatlar hajmi belgilaydi: hisob-fakturalar, toʻlovlar, xodimlar va kontragentlar soni.",
    },
    team: {
      title: "Jamoa | Sifat Buxgalter",
      description: "Hisobingizni kim yuritadi: 2016-yildan beri ishlayotgan bosh buxgalter Ibrohim va mijozlar bilan ishlaydigan Bekzod. Toshkent.",
      eyebrow: "Jamoa",
      h1: "Hisobingizni kim yuritadi",
      lead: "Jamoamiz katta emas, bu ataylab shunday. Kam kompaniya olamiz, har birining hisobini bosh buxgalter shaxsan yuritadi.",
    },
    faq: {
      title: "Koʻp beriladigan savollar | Sifat Buxgalter",
      description: "Buxgalteriya xizmati haqida koʻp beriladigan savollar: narx, hozirgi buxgalter bilan nima qilish, xavfsizlik, ofisga tashrif, dam olish kunlari.",
      eyebrow: "Savollar",
      h1: "Koʻp beriladigan savollar",
      lead: "Bu yerda javob topolmasangiz, Bekzodga Telegramda yozing. Tez javob beradi.",
    },
    contact: {
      title: "Aloqa | Sifat Buxgalter, Toshkent",
      description: "Sifat Buxgalter bilan bogʻlaning: +998 97 732 18 48, Telegram @Davronbekov_Bekzod. Ofis: Toshkent, Yakkasaroy, Muqimiy koʻchasi. 24/7.",
      eyebrow: "Aloqa",
      h1: "Bitta suhbat va siz hisobingizda pul qayerda yoʻqolayotganini bilasiz",
      lead: "Bu sotuv qoʻngʻirogʻi emas. Bekzod hisobingiz haqida ikki-uchta savol beradi va birinchi navbatda nimani tekshirish kerakligini aytadi. Keyingi qaror sizniki.",
    },
    privacy: {
      title: "Maxfiylik siyosati | Sifat Buxgalter",
      description: "Sifat Buxgalter sayti orqali yuborilgan maʼlumotlar qanday ishlatiladi va saqlanadi.",
      eyebrow: "Maxfiylik",
      h1: "Maxfiylik siyosati",
      lead: "Sayt orqali yuborgan maʼlumotlaringiz faqat siz bilan bogʻlanish uchun ishlatiladi.",
    },
    thanks: {
      title: "Rahmat | Sifat Buxgalter",
      description: "Arizangiz qabul qilindi.",
      eyebrow: "Ariza qabul qilindi",
      h1: "Rahmat. Bekzod tez orada qoʻngʻiroq qiladi",
      lead: "Tez orada bogʻlanamiz. Suhbat foydali oʻtishi uchun uchta narsani eslab qoʻying, ular haqida soʻraymiz.",
    },
  },
  ru: {
    services: {
      title: "Бухгалтерские услуги в Ташкенте — Sifat Buxgalter",
      description: "Бухгалтерские услуги для ООО: учёт и отчётность, снижение налогов, проверки и споры, кадры, ВЭД. Один договор, ответ за 10 минут. Ташкент.",
      eyebrow: "Услуги · Ташкент",
      h1: "Вся бухгалтерия — в одном договоре",
      lead: "По каждой услуге отдельная страница: кому нужно, что входит, как работаем, цена. Не знаете, с чего начать — начнём с экспресс-аудита.",
    },
    pricing: {
      title: "Стоимость бухгалтерских услуг — Ташкент",
      description: "Цена аутсорсинга бухгалтерии зависит от объёма документов, а не от оборота. Без процента от экономии и скрытых платежей. Точная цифра — на первом звонке.",
      eyebrow: "Цена",
      h1: "Цена зависит от объёма работы, не от оборота",
      lead: "Готовых тарифов нет — и это намеренно. Цену определяет объём документов в месяц: счета-фактуры, платежи, сотрудники, контрагенты.",
    },
    team: {
      title: "Команда — Sifat Buxgalter",
      description: "Кто ведёт ваш учёт: главный бухгалтер Иброхим с опытом с 2016 года и Бекзод, отвечающий за работу с клиентами. Ташкент.",
      eyebrow: "Команда",
      h1: "Кто ведёт ваш учёт",
      lead: "Не большая команда — и это намеренно. Берём мало компаний, каждую лично ведёт главный бухгалтер.",
    },
    faq: {
      title: "Частые вопросы — Sifat Buxgalter",
      description: "Частые вопросы об аутсорсинге бухгалтерии: цена, что делать с бухгалтером, безопасность, выезд в офис, выходные.",
      eyebrow: "Вопросы",
      h1: "Часто спрашивают",
      lead: "Не нашли ответ — напишите Бекзоду в Telegram, ответит за 10 минут.",
    },
    contact: {
      title: "Контакты — Sifat Buxgalter, Ташкент",
      description: "Связаться с Sifat Buxgalter: +998 97 732 18 48, Telegram @Davronbekov_Bekzod. Офис: Ташкент, Яккасарай, ул. Мукими. 24/7.",
      eyebrow: "Контакты",
      h1: "Один звонок — и вы знаете, где в вашем учёте теряются деньги",
      lead: "Это не продающий звонок. Бекзод задаст два-три вопроса о вашем учёте и скажет, что проверить первым. Дальше решение — за вами.",
    },
    privacy: {
      title: "Политика конфиденциальности — Sifat Buxgalter",
      description: "Как используются и хранятся данные, отправленные через сайт Sifat Buxgalter.",
      eyebrow: "Конфиденциальность",
      h1: "Политика конфиденциальности",
      lead: "Данные, отправленные через сайт, используются только для связи с вами.",
    },
    thanks: {
      title: "Спасибо — Sifat Buxgalter",
      description: "Заявка принята.",
      eyebrow: "Заявка принята",
      h1: "Спасибо. Бекзод скоро перезвонит",
      lead: "Свяжемся в течение 10 минут. Чтобы звонок был полезным, вспомните три вещи — о них спросим.",
    },
  },
};

export const contactExtra: Record<Locale, { title: string; steps: { t: string; d: string }[]; noSale: string }> = {
  uz: {
    title: "Suhbatda nima boʻladi",
    steps: [
      { t: "Uchta savol", d: "Oyiga nechta hisob-faktura oʻtadi, ombor qanday yuritiladi, oxirgi tekshiruv qachon boʻlgan. Hujjat kerak emas." },
      { t: "Birinchi xavf", d: "Sizning holatingizda pul odatda qayerda yoʻqoladi: imtiyoz, ombor yoki kechikkan hisobot. Shuni toʻgʻridan-toʻgʻri aytamiz." },
      { t: "Narx va keyingi qadam", d: "Hajmni eshitib, taxminiy narxni shu suhbatda aytamiz. Mos kelmasak, buni ham ochiq aytamiz." },
    ],
    noSale: "Uchrashuv, taqdimot va «keyin qoʻngʻiroq qilamiz» yoʻq. Suhbatdan keyin siz qaror qilasiz, biz qayta bezovta qilmaymiz.",
  },
  ru: {
    title: "Что будет за 10 минут",
    steps: [
      { t: "Три вопроса", d: "Сколько счетов-фактур в месяц, как ведётся склад, когда была последняя проверка. Документы не нужны." },
      { t: "Первый риск", d: "Где в вашей ситуации обычно теряются деньги — льгота, склад или просроченный отчёт. Скажем прямо." },
      { t: "Цена и следующий шаг", d: "Услышав объём, назовём ориентир по цене на этом же звонке. Если не подходим — скажем и это." },
    ],
    noSale: "Без встреч, презентаций и «мы вам перезвоним». После звонка решаете вы — повторно не беспокоим.",
  },
};

export const thanksExtra: Record<Locale, { title: string; items: string[]; telegram: string }> = {
  uz: {
    title: "Suhbatgacha eslab qoʻying",
    items: [
      "Oyiga taxminan nechta hisob-faktura va toʻlov oʻtadi",
      "Ombor qayerda yuritiladi: 1C, Excel yoki daftar",
      "Oxirgi soliq tekshiruvi yoki talabnoma qachon kelgan",
    ],
    telegram: "Shoshilinch boʻlsa (tekshiruv, bloklangan hisob raqam), kutmang, hoziroq yozing:",
  },
  ru: {
    title: "Вспомните до звонка",
    items: [
      "Сколько примерно счетов-фактур и платежей проходит в месяц",
      "Где ведётся склад — 1С, Excel или тетрадь",
      "Когда была последняя налоговая проверка или требование",
    ],
    telegram: "Если срочно (проверка, заблокирован счёт) — не ждите, напишите сейчас:",
  },
};

export const servicesRouter: Record<Locale, { title: string; lead: string; items: { situation: string; answer: string; id: import("./services").ServiceId }[] }> = {
  uz: {
    title: "Nimadan boshlash kerak?",
    lead: "Xizmat 11 ta, lekin boshlanish nuqtasi odatda shu uchtadan biri.",
    items: [
      { situation: "Buxgalterim bor, hammasi joyida koʻrinadi", answer: "Ekspress-auditdan boshlang. Bir necha kunda ortiqcha toʻlovlar va xavflar roʻyxatini olasiz. Hech qanday majburiyatsiz.", id: "entry-audit" },
      { situation: "Talabnoma keldi yoki hisob raqam bloklandi", answer: "Bu shoshilinch. Javob berish muddati bor. Bugun qoʻngʻiroq qiling, hujjatlarni birga tayyorlaymiz.", id: "audit-defense" },
      { situation: "Soliq koʻp chiqyapti, qonuniy kamaytirmoqchiman", answer: "Amaldagi imtiyozlardan sizga mos keladiganini topamiz va qoʻllaymiz. Tejalgan puldan foiz olmaymiz.", id: "tax-reduction" },
    ],
  },
  ru: {
    title: "С чего начать?",
    lead: "Услуг одиннадцать — но точка входа обычно одна из трёх.",
    items: [
      { situation: "Бухгалтер есть, всё выглядит нормально", answer: "Начните с экспресс-аудита. За несколько дней получите список переплат и рисков — без обязательств.", id: "entry-audit" },
      { situation: "Пришло требование или заблокирован счёт", answer: "Это срочно. У ответа есть срок — позвоните сегодня, документы подготовим вместе.", id: "audit-defense" },
      { situation: "Налогов много, хочу платить меньше законно", answer: "Из действующих льгот найдём и применим подходящие — без процента от сэкономленного.", id: "tax-reduction" },
    ],
  },
};

export const pricingIncluded: Record<Locale, { title: string; items: string[]; note: string }> = {
  uz: {
    title: "Narx ichida nima bor",
    items: [
      "Toʻliq buxgalteriya va soliq hisobi, 1C da",
      "Barcha hisobotlar oʻz vaqtida",
      "Savolga javob 10 daqiqagacha, 24/7",
      "Soliq imtiyozlarini topish va qoʻllash, foizsiz",
      "Har oy ombor va 1C solishtiruvi",
      "Kontragentlarni tekshirish",
      "Sizga har oy hisobot: qancha soliq chiqdi, nega va nimaga tayyorlanish kerak",
      "Buxgalter ofisingizda, oyiga 3 marta",
      "Xato bizdan chiqsa, jarima bizning hisobimizdan",
    ],
    note: "Soliq tekshiruvi, hisob raqamni ochish va nizolar doimiy mijozlar uchun shartnoma ichida. Alohida toʻlanadigan yagona narsa ekspress-audit. Shartnoma tuzilsa, uning narxi hisobga olinadi.",
  },
  ru: {
    title: "Что входит в цену",
    items: [
      "Полный бухгалтерский и налоговый учёт — в 1С",
      "Все отчёты в срок",
      "Ответ на вопрос — до 10 минут, 24/7",
      "Поиск и применение налоговых льгот — без процента",
      "Ежемесячная сверка склад ↔ 1С",
      "Проверка контрагентов",
      "Отчёт вам каждый месяц: сколько налогов, почему, к чему готовиться",
      "Бухгалтер у вас в офисе — 3 раза в месяц",
      "Штраф по нашей ошибке — за наш счёт",
    ],
    note: "Налоговая проверка, разблокировка счёта, споры — для клиентов аутсорсинга в рамках договора. Единственное, что оплачивается отдельно, — экспресс-аудит; при заключении договора её стоимость зачитывается.",
  },
};

export const privacyText: Record<Locale, string[]> = {
  uz: [
    "1. Sayt orqali yuborilgan maʼlumotlar (ism, telefon, kompaniya nomi, yillik aylanma oraligʻi) faqat siz bilan bogʻlanish va xizmat boʻyicha maslahat berish uchun ishlatiladi.",
    "2. Maʼlumotlar uchinchi shaxslarga berilmaydi va reklama tarqatish uchun ishlatilmaydi.",
    "3. Maʼlumotlar Sifat Buxgalter xodimlarining ish vositalarida (Telegram, CRM) saqlanadi va soʻrovingiz boʻyicha oʻchiriladi.",
    "4. Sayt tashrif statistikasi uchun Google Analytics kabi vositalardan foydalanishi mumkin; ular shaxsiy maʼlumotlarni toʻplamaydi.",
    "5. Savollar boʻyicha: +998 97 732 18 48 yoki Telegram @Davronbekov_Bekzod.",
  ],
  ru: [
    "1. Данные, отправленные через сайт (имя, телефон, название компании, диапазон годового оборота), используются только для связи с вами и консультации по услугам.",
    "2. Данные не передаются третьим лицам и не используются для рассылок.",
    "3. Данные хранятся в рабочих инструментах сотрудников Sifat Buxgalter (Telegram, CRM) и удаляются по вашему запросу.",
    "4. Сайт может использовать инструменты статистики посещений, например Google Analytics; они не собирают персональные данные.",
    "5. Вопросы: +998 97 732 18 48 или Telegram @Davronbekov_Bekzod.",
  ],
};
