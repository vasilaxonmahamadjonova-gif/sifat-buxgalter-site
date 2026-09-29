// content/services.ts — Sifat Buxgalter xizmat sahifalari (UZ + RU)
// Har sahifa: metadata + bloklar. Bitta shablon (app/[locale]/xizmatlar/[slug]/page.tsx) hammasini render qiladi.

export type Locale = "uz" | "ru";

export type ServiceId =
  | "outsourcing"
  | "reporting"
  | "tax-reduction"
  | "tax-refund"
  | "regime"
  | "audit-defense"
  | "unblock"
  | "payroll"
  | "foreign-trade"
  | "counterparty"
  | "entry-audit";

export type ServicePage = {
  id: ServiceId;
  slug: string;
  urgent?: boolean; // shoshilinch intent — CTA "hoziroq qoʻngʻiroq qiling"
  title: string; // <title>, ≤60
  description: string; // meta, ≤155
  eyebrow: string;
  h1: string;
  lead: string;
  forWhomTitle: string;
  forWhom: string[];
  includesTitle: string;
  includes: string[];
  processTitle: string;
  process: { title: string; text: string }[];
  whyTitle: string;
  why: { title: string; text: string }[];
  priceTitle: string;
  price: string;
  faq: { q: string; a: string }[];
  related: ServiceId[];
  cta: string;
  ctaNote: string;
};

// Sluglar — hreflang va bogʻliq xizmatlar linklari uchun
export const serviceSlugs: Record<Locale, Record<ServiceId, string>> = {
  uz: {
    outsourcing: "buxgalteriya-autsorsingi",
    reporting: "soliq-hisobotlari",
    "tax-reduction": "soliqni-kamaytirish",
    "tax-refund": "soliqni-qaytarish",
    regime: "soliq-rejimini-ozgartirish",
    "audit-defense": "soliq-tekshiruvi",
    unblock: "hisob-raqamni-ochish",
    payroll: "ish-haqi-va-kadrlar",
    "foreign-trade": "tashqi-savdo",
    counterparty: "kontragentlarni-tekshirish",
    "entry-audit": "buxgalteriya-auditi",
  },
  ru: {
    outsourcing: "autsorsing-buhgalterii",
    reporting: "sdacha-otchetnosti",
    "tax-reduction": "snizhenie-nalogov",
    "tax-refund": "vozvrat-pereplaty-nalogov",
    regime: "smena-nalogovogo-rezhima",
    "audit-defense": "nalogovaya-proverka",
    unblock: "razblokirovka-scheta",
    payroll: "zarplata-i-kadry",
    "foreign-trade": "ved-kontrakty",
    counterparty: "proverka-kontragentov",
    "entry-audit": "audit-buhgalterii",
  },
};

export const servicesBase: Record<Locale, string> = { uz: "xizmatlar", ru: "uslugi" };

const uzCommon = {
  forWhomTitle: "Kimga kerak",
  includesTitle: "Shartnomaga nima kiradi",
  processTitle: "Qanday ishlaymiz",
  whyTitle: "Shartnomaga yozadigan vaʼdalarimiz",
  priceTitle: "Narx",
  cta: "Ekspress-audit",
  ctaNote:
    "Hech qayerga borishingiz shart emas. Bekzod tez orada bogʻlanadi.",
};

const ruCommon = {
  forWhomTitle: "Кому нужно",
  includesTitle: "Что входит в договор",
  processTitle: "Как работаем",
  whyTitle: "Что прописываем в договоре",
  priceTitle: "Цена",
  cta: "Бесплатный звонок на 10 минут",
  ctaNote:
    "Никуда ехать не нужно. Бекзод свяжется в течение 10 минут.",
};

export const services: Record<Locale, Record<ServiceId, ServicePage>> = {
  // ───────────────────────────── UZ ─────────────────────────────
  uz: {
    outsourcing: {
      ...uzCommon,
      id: "outsourcing",
      slug: "buxgalteriya-autsorsingi",
      title: "Toshkentda MChJ uchun buxgalteriya xizmati",
      description:
        "MChJ uchun toʻliq buxgalteriya va soliq hisobi. Bosh buxgalter 2016-yildan beri ishlaydi, savolga 10 daqiqada javob beramiz, xato bizdan chiqsa jarimani oʻzimiz toʻlaymiz. Toshkent.",
      eyebrow: "Buxgalteriya xizmati · Toshkent",
      h1: "Buxgalteringiz bor. Soliq xavfi esa hali ham sizning boʻyningizda",
      lead:
        "Hisobotni oʻz vaqtida topshirish eng kam talab. Biz uchta narsa uchun kerakmiz: savolga tez javob, soliqni qonuniy kamaytirish va shartnomada yozilgan javobgarlik. Xato bizdan chiqsa, jarimani oʻzimiz toʻlaymiz.",
      forWhom: [
        "Yillik aylanmasi 5 mlrd soʻmdan, xodimi 5 nafardan koʻp MChJlar",
        "Buxgalteri bor, lekin oy oxirida qancha soliq chiqishini bilmaydigan egalar",
        "Buxgalter ketyapti (dekret, pensiya, boshqa ish) va ishni topshiradigan odam yoʻq",
        "Ishlab chiqarish, xizmat koʻrsatish, ulgurji savdo, import-eksport, marketpleyslar",
      ],
      includes: [
        "Toʻliq buxgalteriya va soliq hisobi, 1C da",
        "Barcha hisobotlarni oʻz vaqtida topshirish",
        "Bank operatsiyalari, hisob-fakturalar, solishtirma dalolatnomalar",
        "Debitor va kreditor qarzlar nazorati",
        "Soliqni qonuniy kamaytirish boʻyicha maslahat. Alohida foiz olmaymiz",
        "Har oy direktor uchun hisobot: qancha soliq chiqdi, nega va keyingi oyga nimaga tayyorlanish kerak",
        "Buxgalter ofisingizda, oyiga 3 marta",
      ],
      process: [
        { title: "Birinchi suhbat", text: "Bekzod hisobingiz haqida ikki-uchta savol beradi va asosiy xavf odatda qayerda yashirinishini aytadi." },
        { title: "Ekspress-audit", text: "Oxirgi davrni koʻramiz. Eski xatolarni topamiz va tuzatish rejasini beramiz. Koʻrmasdan ishni qabul qilmaymiz." },
        { title: "Shartnoma va ishni qabul qilish", text: "Hujjatlar, 1C bazasi va kirish huquqlarini siz bilan birga olamiz. Umumiy Telegram guruh ochamiz." },
        { title: "Har oy", text: "Hisobotlar oʻz vaqtida, ombor bilan solishtirish, sizga hisobot. Aloqa 24/7." },
      ],
      why: [
        { title: "Savolga tez javob", text: "24/7, shanba kuni ham. Shoshilinch toʻlovni 5 daqiqada tayyorlaymiz." },
        { title: "Xato bizdan chiqsa, jarimani biz toʻlaymiz", text: "Jarima bizning aybimiz bilan chiqsa, oʻzimiz toʻlaymiz. Bitta shart bor: ombor hisobi halol yuritilsin." },
        { title: "Kam kompaniya olamiz", text: "Har birini oxirigacha tekshirish uchun. Bitta buxgalterda beshta firma bizning usulimiz emas." },
      ],
      price:
        "Narx oylik hujjat hajmiga qarab belgilanadi, aylanmaga qarab emas. Tejalgan soliqdan foiz olmaymiz. Aniq raqamni birinchi suhbatda, hajmni bilib olgandan keyin aytamiz.",
      faq: [
        { q: "Buxgalterimni ishdan boʻshatishim kerakmi?", a: "Yoʻq, darrov emas. Ekspress-audit buxgalteringizning ishini ham koʻrsatib beradi. Natijani koʻrib, oʻzingiz qaror qilasiz." },
        { q: "Hujjatlarimiz xavfsizmi?", a: "Xohlasangiz, NDA imzolaymiz. Faqat litsenziyali 1C da, himoyalangan kompyuterlarda va litsenziyali antivirus bilan ishlaymiz." },
        { q: "Toshkentdan tashqarida ishlaysizlarmi?", a: "Asosan Toshkent shahri va viloyatida. Chunki buxgalter oyiga 3 marta ofisingizga boradi." },
      ],
      related: ["entry-audit", "tax-reduction", "reporting"],
    },

    reporting: {
      ...uzCommon,
      id: "reporting",
      slug: "soliq-hisobotlari",
      title: "MChJ soliq hisobotlarini topshirish, Toshkent",
      description:
        "QQS, JShDS, ijtimoiy soliq va boshqa hisobotlarni oʻz vaqtida topshiramiz. Kechikish jarimasi 4–5 mln soʻm. Xato bizdan chiqsa, jarimani oʻzimiz toʻlaymiz. Toshkent.",
      eyebrow: "Soliq hisobotlari · Toshkent",
      h1: "Hisobot oʻz vaqtida. Xato bizdan chiqsa, jarimani biz toʻlaymiz",
      lead:
        "Bitta hisobot bir kun kechiksa, 4–5 mln soʻm jarima chiqadi. Biz hisobotlarni oʻz vaqtida topshiramiz, qancha soliq chiqishini oldindan aytamiz. Jarima bizning xatomiz bilan chiqsa, oʻzimiz toʻlaymiz.",
      forWhom: [
        "«Hisobot joʻnatildi» degan xabardan boshqa hech narsa koʻrmaydigan egalar",
        "Oxirgi kuni buxgalteridan «bugun ulgurmaymiz» deb eshitgan kompaniyalar",
        "Soliq idorasidan talabnoma olgan va nima deb javob berishni bilmaydigan firmalar",
      ],
      includes: [
        "QQS deklaratsiyasi, har oy",
        "JShDS va ijtimoiy soliq hisobotlari",
        "Foyda soligʻi yoki aylanma soligʻi, rejimga qarab",
        "Statistika hisobotlari",
        "Soliq idorasi talabnomalariga javob",
        "Har oy sizga: qancha soliq chiqdi, nega va keyingi oyga nimaga tayyorlanish kerak",
      ],
      process: [
        { title: "Hujjatlarni yigʻamiz", text: "1C orqali. Yetishmagan hujjatni oxirgi kuni emas, muddatdan 5 kun oldin soʻraymiz." },
        { title: "Tayyorlaymiz va tekshiramiz", text: "Ombor qoldigʻi va kontragentlar bilan solishtiramiz. Xatoni topshirishdan oldin topamiz." },
        { title: "Siz tasdiqlaysiz, biz topshiramiz", text: "Summani joʻnatishdan oldin koʻrasiz. Kutilmagan soliq boʻlmaydi." },
      ],
      why: [
        { title: "Xato bizdan chiqsa, jarimani biz toʻlaymiz", text: "Bizning aybimiz bilan kechikish yoki notoʻgʻri hisobot boʻlsa, jarimani oʻzimiz toʻlaymiz. Bu shartnomada yozilgan." },
        { title: "Oldindan aytamiz", text: "Qancha soliq chiqishini muddatdan oldin bilasiz. «Toʻlang» emas, tayyorlanishga vaqt." },
        { title: "Litsenziyali dasturlar va himoyalangan kompyuterlar", text: "1C va soliq toʻlovchi kabineti rasmiy. Kompyuterlar litsenziyali antivirus bilan himoyalangan, maʼlumot tashqariga chiqmaydi." },
      ],
      price:
        "Hisobot topshirish alohida xizmat emas, u buxgalteriya xizmati shartnomasiga kiradi. Narx hujjatlar hajmiga bogʻliq.",
      faq: [
        { q: "Oldingi buxgalter topshirmagan hisobotlar nima boʻladi?", a: "Ekspress-auditda topamiz, nima ochiq qolganini koʻrsatamiz va reja beramiz. Oʻtgan davr uchun javobgarlikni alohida kelishamiz." },
        { q: "Hisobotni topshirishdan oldin koʻra olamanmi?", a: "Ha. Summani va u qanday chiqqanini joʻnatishdan oldin koʻrasiz." },
        { q: "Topshirish muddati dam olish kuniga toʻgʻri kelsa-chi?", a: "Biz 24/7 aloqadamiz. Muddat dam olish kuniga toʻgʻri kelsa, oldinroq topshiramiz." },
      ],
      related: ["outsourcing", "audit-defense", "entry-audit"],
    },

    "tax-reduction": {
      ...uzCommon,
      id: "tax-reduction",
      slug: "soliqni-kamaytirish",
      title: "MChJ uchun soliqni qonuniy kamaytirish, Toshkent",
      description:
        "Amaldagi soliq imtiyozlaridan sizga mos keladiganini topamiz va qoʻllaymiz. Tejalgan puldan foiz olmaymiz, bu ishimizga kiradi. MChJ uchun, Toshkent.",
      eyebrow: "Soliqni qonuniy kamaytirish",
      h1: "Qoʻshningiz kamroq soliq toʻlaydi. Nega?",
      lead:
        "Javob odatda oddiy: uning buxgalteri imtiyozni qoʻllagan, sizniki qoʻllamagan. Oʻzbekistonda oʻnlab soliq imtiyozi bor. Qaysi biri sizga mos kelishini aniqlaymiz va qoʻllaymiz. Alohida foiz olmaymiz.",
      forWhom: [
        "Aylanma oʻsdi, soliq ham oʻsdi. Qonuniy kamroq toʻlash yoʻlini hech kim koʻrsatmayapti",
        "Oʻxshash firma kamroq toʻlashini eshitgan egalar",
        "Yangi imtiyozlar haqida Instagramdan bilib oladigan kompaniyalar",
        "Soliq rejimini 3 yil oldin tanlab, shundan beri qayta koʻrmagan firmalar",
      ],
      includes: [
        "Sohangizga mos imtiyozlarni aniqlash",
        "Soliq rejimini tahlil qilish va kerak boʻlsa oʻzgartirish",
        "Ortiqcha toʻlangan soliqni qaytarish",
        "Yangi qonun va imtiyozlarni birinchi boʻlib aytamiz",
        "Har oy: qaysi imtiyoz qoʻllandi va qancha pul tejaldi",
      ],
      process: [
        { title: "Tahlil", text: "Oxirgi davr hisobotlari, soha, aylanma va xodimlar soniga qarab qaysi imtiyozlar mos kelishini koʻramiz." },
        { title: "Ochiq aytamiz", text: "Mos kelganini qoʻllaymiz. Mos kelmasa, toʻgʻrisini aytamiz. Imtiyozni havodan olmaymiz: masalan, qazib olish sohasida imtiyoz yoʻq." },
        { title: "Qoʻllash va nazorat", text: "Imtiyoz hisobotga kiradi, natijani har oy koʻrasiz." },
      ],
      why: [
        { title: "Foizsiz", text: "Tejalgan puldan alohida foiz olmaymiz. Soliqni kamaytirish ishimizning bir qismi." },
        { title: "Faqat qonuniy", text: "Naqd savdo, «kamroq koʻrsatish» bizga emas. Xavfni oʻz zimmamizga olamiz, shuning uchun faqat halol yoʻl." },
        { title: "Birinchi boʻlib aytamiz", text: "Yangi imtiyoz chiqsa, Instagramdan emas, bizdan bilasiz." },
      ],
      price:
        "Buxgalteriya xizmati shartnomasiga kiradi. Alohida foiz ham, alohida toʻlov ham yoʻq. Qaysi imtiyozlar mos kelishini ekspress-auditda oldindan aytamiz.",
      faq: [
        { q: "Bu qonuniymi?", a: "Ha. Faqat Soliq kodeksidagi imtiyoz va rejimlar. Yashirin aylanma va naqd savdo bilan ishlamaymiz. Bu shartnomada yozilgan." },
        { q: "Qancha tejash mumkin?", a: "Sohaga bogʻliq. Baʼzi sohalarda (masalan, qazib olish) imtiyoz umuman yoʻq, buni oldindan aytamiz. Aniq raqam ekspress-auditdan keyin." },
        { q: "Nega buni buxgalterim qilmagan?", a: "Odatda vaqti yoʻq: bitta odam bir nechta firmani yuritadi va qonunlarni kuzatishga ulgurmaydi. Bu uning aybi emas, tizim shunday." },
      ],
      related: ["tax-refund", "regime", "outsourcing"],
    },

    "tax-refund": {
      ...uzCommon,
      id: "tax-refund",
      slug: "soliqni-qaytarish",
      title: "Ortiqcha toʻlangan soliqni qaytarish, Toshkent",
      description:
        "Ortiqcha toʻlangan soliqni topamiz va qaytaramiz yoki keyingi toʻlovlar hisobiga oʻtkazamiz. Muddati oʻtmasdan. MChJ uchun, Toshkent.",
      eyebrow: "Ortiqcha toʻlangan soliq",
      h1: "Ortiqcha toʻlangan soliq sizning pulingiz",
      lead:
        "Buxgalter «xotirjam boʻlish uchun» zaxira bilan toʻlaydi, ega buni bilmaydi. Bu pul davlatda turibdi va uni qaytarib olish mumkin. Lekin muddati bor. Biz ortiqcha toʻlovni topamiz va qaytaramiz.",
      forWhom: [
        "«Nega qoʻshnimdan koʻp toʻlayapman?» deb soʻragan egalar",
        "Rejimi oʻzgargan, lekin eski stavka boʻyicha toʻlashda davom etgan firmalar",
        "Buxgalteri almashgan va oʻtgan davrni hech kim tekshirmagan kompaniyalar",
      ],
      includes: [
        "Oxirgi davrlar boʻyicha ortiqcha toʻlovni aniqlash",
        "Soliq idorasi bilan solishtirma dalolatnoma",
        "Qaytarish yoki hisobga olish uchun ariza va hujjatlar",
        "Natijagacha kuzatib borish",
      ],
      process: [
        { title: "Solishtirish", text: "Soliq toʻlovchi kabineti va 1C ni solishtiramiz, ortiqcha toʻlovni davrlar boʻyicha koʻrsatamiz." },
        { title: "Ariza", text: "Qaytarish yoki keyingi toʻlovlar hisobiga oʻtkazish. Qaysi biri sizga foydali boʻlsa, oʻsha." },
        { title: "Natija", text: "Pul hisob raqamingizga qaytadi yoki keyingi soliqdan ushlab qolinadi. Har bir qadamni koʻrasiz." },
      ],
      why: [
        { title: "Foizsiz", text: "Qaytarilgan summadan foiz olmaymiz." },
        { title: "Ekspress-auditda topamiz", text: "Yangi mijozda birinchi koʻradigan narsalarimizdan biri ortiqcha toʻlov." },
        { title: "Muddatni kuzatamiz", text: "Qaytarish muddati oʻtsa, pul qaytmaydi. Biz oldinroq harakat qilamiz." },
      ],
      price:
        "Buxgalteriya xizmati mijozlari uchun shartnoma doirasida. Alohida murojaat boʻlsa, narx hujjatlar hajmiga qarab, birinchi suhbatda aytiladi.",
      faq: [
        { q: "Necha yil uchun qaytarib olish mumkin?", a: "Qonunda muddat bor, shuning uchun tekshiruvni kechiktirmaslik kerak. Aniq muddatni suhbatda, sizning holatingizga qarab aytamiz." },
        { q: "Soliq idorasi tekshiruv boshlamaydimi?", a: "Solishtirma dalolatnoma oddiy jarayon. Hujjatlar tartibda boʻlsa, tekshiruvga sabab yoʻq. Shuning uchun avval oʻzimiz tekshiramiz." },
        { q: "Hisobga olish qaytarishdan yaxshimi?", a: "Koʻpincha tezroq. Qaysi biri foydali ekanini holatingizga qarab aytamiz." },
      ],
      related: ["tax-reduction", "entry-audit", "regime"],
    },

    regime: {
      ...uzCommon,
      id: "regime",
      slug: "soliq-rejimini-ozgartirish",
      title: "MChJ soliq rejimini oʻzgartirish, Toshkent",
      description:
        "Aylanma soligʻidan QQSga yoki aksincha. Qaysi rejim sizga arzonroq ekanini hisoblaymiz va oʻtkazamiz. MChJ uchun, Toshkent.",
      eyebrow: "Soliq rejimi",
      h1: "Notoʻgʻri rejim har oy ortiqcha toʻlov degani",
      lead:
        "Aylanma 1 mlrd soʻmdan oshganda rejim oʻzgaradi. Koʻp firmalar bunga tayyor emas. Biz sizning raqamlaringizda ikkala rejimdagi soliqni hisoblaymiz, foydalisini tanlaymiz va oʻtishni rasmiylashtiramiz.",
      forWhom: [
        "Aylanmasi 1 mlrd soʻmga yaqinlashayotgan firmalar",
        "Rejimni 2–3 yil oldin tanlab, shundan beri qayta hisoblamagan kompaniyalar",
        "QQS toʻlovchi kontragentlar bilan ishlay boshlagan firmalar",
      ],
      includes: [
        "Ikkala rejimda soliq yukini hisoblash, sizning raqamlaringizda",
        "Oʻtish muddatlari va shartlari",
        "Ariza va hujjatlarni tayyorlash va topshirish",
        "Oʻtgandan keyingi birinchi hisobotlarni nazorat qilish",
      ],
      process: [
        { title: "Hisob-kitob", text: "12 oylik maʼlumot boʻyicha: hozirgi rejimda qancha, boshqasida qancha." },
        { title: "Qaror", text: "Raqamlarni koʻrsatamiz, qarorni siz qilasiz. «Oʻtish kerak» deb majburlamaymiz, baʼzida qolgan foydaliroq." },
        { title: "Oʻtish", text: "Ariza, muddatlar, birinchi hisobot. Hammasi bizda." },
      ],
      why: [
        { title: "Oldindan aytamiz", text: "Aylanma chegaraga yaqinlashganda. Undan oʻtib ketgandan keyin emas." },
        { title: "Foizsiz", text: "Tejalgan puldan foiz olmaymiz." },
        { title: "Faqat qonuniy", text: "Savdoni yashirib aylanmani «ushlab turish» bizga emas." },
      ],
      price: "Buxgalteriya xizmati shartnomasiga kiradi. Alohida murojaat boʻlsa, narxni birinchi suhbatda aytamiz.",
      faq: [
        { q: "Rejimni yil oʻrtasida oʻzgartirsa boʻladimi?", a: "Holatga bogʻliq. Baʼzi oʻtishlar faqat yil boshidan, baʼzilari majburiy (chegaradan oshganda). Suhbatda aniq aytamiz." },
        { q: "QQSga oʻtsam, soliq oshib ketmaydimi?", a: "Har doim ham emas. Kontragentlaringiz QQS toʻlasa, kiruvchi QQS yukni kamaytiradi. Hisoblab koʻrsatamiz." },
        { q: "Buxgalterim bu haqda aytmagan.", a: "Koʻpincha vaqti boʻlmaydi. Bu ekspress-auditning birinchi savollaridan biri." },
      ],
      related: ["tax-reduction", "tax-refund", "outsourcing"],
    },

    "audit-defense": {
      ...uzCommon,
      id: "audit-defense",
      slug: "soliq-tekshiruvi",
      urgent: true,
      title: "Soliq tekshiruvi: hujjatlar va eʼtirozlar, Toshkent",
      description:
        "Kameral yoki sayyor tekshiruv keldimi? Hujjatlarni tayyorlaymiz, dalolatnomaga eʼtiroz yozamiz, yuridik yordam beramiz. Bugun qoʻngʻiroq qiling. Toshkent.",
      eyebrow: "Soliq tekshiruvi · shoshilinch",
      h1: "Tekshiruv keldi. Birinchi 24 soat hal qiladi",
      lead:
        "Talabnoma yoki tekshiruv dalolatnomasiga javob berish muddati bor. Oʻtkazib yuborsangiz, qoʻshimcha hisoblangan soliq avtomatik tasdiqlanadi. Biz hujjatlarni tayyorlaymiz, eʼtiroz yozamiz va oxirigacha boramiz.",
      forWhom: [
        "Soliq idorasidan talabnoma yoki dalolatnoma olgan firmalar",
        "Kameral tekshiruv boʻyicha qoʻshimcha soliq hisoblangan kompaniyalar",
        "Buxgalteri «bilmayman» degan yoki allaqachon ketgan egalar",
      ],
      includes: [
        "Talabnomani tahlil qilish va javob muddatini aniqlash",
        "Kameral va sayyor tekshiruv uchun hujjatlar toʻplami",
        "Tekshiruv dalolatnomasiga asosli eʼtiroz",
        "Soliq idorasi bilan biz gaplashamiz, siz emas",
        "Yuridik yordam",
      ],
      process: [
        { title: "Bugun", text: "Talabnomani yuborasiz. Shu kuniyoq muddat va xavfni aytamiz." },
        { title: "3 kun ichida", text: "Hujjatlar toʻplami va eʼtiroz loyihasi. Siz koʻrib tasdiqlaysiz." },
        { title: "Oxirigacha", text: "Topshirish, javob, kerak boʻlsa keyingi bosqich. Har bir qadamni Telegramda koʻrasiz." },
      ],
      why: [
        { title: "Savolga tez javob", text: "Tekshiruv paytida bu vaqt emas, bu pul." },
        { title: "Ochiq aytamiz", text: "Qoʻshimcha soliq asosli boʻlsa, «kurash» uchun pul olmaymiz. Qanday qilib kamroq toʻlash mumkinligini koʻrsatamiz." },
        { title: "Keyin takrorlanmaydi", text: "Tekshiruvdan keyin sababini yopamiz: ombor, kontragentlar, hisobotlar." },
      ],
      price:
        "Alohida xizmat. Narx tekshiruv turi va hujjatlar hajmiga bogʻliq, birinchi suhbatda aytamiz. Buxgalteriya xizmati mijozlari uchun shartnoma doirasida.",
      faq: [
        { q: "Buxgalterim bor, faqat tekshiruvda yordam kerak.", a: "Boʻladi. Bu alohida xizmat, hisob yuritish shartnomasisiz ham ishlaymiz." },
        { q: "Eʼtiroz yordam beradimi?", a: "Asosli boʻlsa, ha. Koʻpincha summa kamayadi yoki bekor qilinadi. Asos boʻlmasa, oldindan aytamiz." },
        { q: "Muddat oʻtib ketgan boʻlsa-chi?", a: "Baribir qoʻngʻiroq qiling. Baʼzi bosqichlarda hali imkoniyat bor." },
      ],
      related: ["unblock", "counterparty", "entry-audit"],
      cta: "Hoziroq qoʻngʻiroq qiling",
      ctaNote: "Tekshiruvda har bir kun muhim. Bekzod tez orada qoʻngʻiroq qiladi. Yoki toʻgʻridan-toʻgʻri +998 97 732 18 48 ga qoʻngʻiroq qiling.",
    },

    unblock: {
      ...uzCommon,
      id: "unblock",
      slug: "hisob-raqamni-ochish",
      urgent: true,
      title: "Bloklangan hisob raqamini ochish, Toshkent",
      description:
        "Bank hisob raqamingizni blokladimi? Sababini bugun topamiz, hujjatlarni tayyorlaymiz, blokni olib tashlaymiz. MChJ uchun, Toshkent.",
      eyebrow: "Hisob raqam bloklangan · shoshilinch",
      h1: "Hisob raqam bloklangan. Sababini bugun topamiz",
      lead:
        "Blok bu toʻxtagan toʻlovlar, kutayotgan yetkazib beruvchilar va ish haqi. Sabab koʻpincha oddiy: topshirilmagan hisobot yoki toʻlanmagan qarz. Biz sababini topamiz va yopamiz.",
      forWhom: [
        "Bank toʻlovni «soliq idorasi qarori bilan» oʻtkazmayotgan firmalar",
        "Topshirilmagan hisobot haqida faqat blokdan keyin bilib olgan kompaniyalar",
        "Bir nechta bloki bor va qaysi biridan boshlashni bilmaydigan egalar",
      ],
      includes: [
        "Sababini aniqlash, soliq toʻlovchi kabineti va bank orqali",
        "Yetishmayotgan hisobotlarni tayyorlash va topshirish",
        "Qarzni hisoblash va toʻlash tartibi",
        "Blokni olib tashlash uchun ariza va hujjatlar",
        "Sababini yopish, qayta takrorlanmasligi uchun",
      ],
      process: [
        { title: "Bugun", text: "Kabinetga kiramiz, sababini koʻramiz, nima qilish kerakligini aytamiz." },
        { title: "1–3 kun", text: "Hisobot topshirildi yoki qarz yopildi, ariza berildi." },
        { title: "Blok olib tashlandi", text: "Bank toʻlovlarni oʻtkazadi. Keyin hisobni tartibga keltiramiz, sabab qaytib kelmasligi uchun." },
      ],
      why: [
        { title: "Savolga tez javob", text: "Blok paytida har bir soat toʻxtagan toʻlov degani." },
        { title: "Ochiq aytamiz", text: "Qarz haqiqiy boʻlsa, «bahslashamiz» demaymiz. Eng tez yopish yoʻlini koʻrsatamiz." },
        { title: "Keyin takrorlanmaydi", text: "Sabab hisobotlarda boʻlsa, endi hisobotlar oʻz vaqtida topshiriladi. Xato bizdan chiqsa, jarimani biz toʻlaymiz." },
      ],
      price: "Alohida xizmat. Narx sabab va hajmga bogʻliq, birinchi suhbatda aytamiz. Buxgalteriya xizmati mijozlari uchun shartnoma doirasida.",
      faq: [
        { q: "Blok necha kunda olib tashlanadi?", a: "Sabab hisobotda boʻlsa, odatda topshirilgandan keyin 1–3 kun. Qarz boʻlsa, toʻlangandan keyin. Aniq muddat sababga bogʻliq." },
        { q: "Buxgalterim bor, faqat blokni olib tashlash kerak.", a: "Boʻladi. Bu alohida xizmat, hisob yuritish shartnomasisiz ham ishlaymiz." },
        { q: "Bank ham bloklashi mumkinmi?", a: "Ha. Masalan, hujjat soʻrovi javobsiz qolsa. Blok qaysi tomondan ekanini birinchi navbatda aniqlaymiz." },
      ],
      related: ["audit-defense", "reporting", "outsourcing"],
      cta: "Hoziroq qoʻngʻiroq qiling",
      ctaNote: "Bekzod tez orada qoʻngʻiroq qiladi. Yoki toʻgʻridan-toʻgʻri +998 97 732 18 48 ga qoʻngʻiroq qiling.",
    },

    payroll: {
      ...uzCommon,
      id: "payroll",
      slug: "ish-haqi-va-kadrlar",
      title: "Ish haqi hisobi va kadrlar hisobi, Toshkent",
      description:
        "Ish haqi, JShDS, ijtimoiy soliq, aliment, kadr buyruqlari, mehnat shartnomalari. Hammasi oʻz vaqtida va xatosiz. MChJ uchun, Toshkent.",
      eyebrow: "Ish haqi va kadrlar",
      h1: "Ish haqi, kadrlar, aliment. Xatosiz va oʻz vaqtida",
      lead:
        "Ish haqidagi xato bir vaqtning oʻzida xodim bilan nizo va soliq idorasi bilan muammo. Biz hisoblaymiz, buyruqlarni rasmiylashtiramiz va hisobotlarni topshiramiz. Siz faqat tasdiqlaysiz.",
      forWhom: [
        "Xodimi 5 nafardan koʻp, lekin kadr ishi «qogʻozda qolgan» firmalar",
        "Aliment, kasallik varaqasi va taʼtil pulida chalkashib ketadigan kompaniyalar",
        "Tekshiruvda mehnat shartnomalarini soʻrashidan xavotirdagi egalar",
      ],
      includes: [
        "Ish haqi, JShDS va ijtimoiy soliq hisobi",
        "Aliment, taʼtil puli, kasallik varaqasi",
        "Kadr buyruqlari: ishga qabul, taʼtil, ishdan boʻshatish",
        "Mehnat shartnomalari va mehnat daftarchalari",
        "Ish haqi boʻyicha hisobotlar",
        "Tabel nazorati",
      ],
      process: [
        { title: "Oy davomida", text: "Ishga qabul, boʻshatish, taʼtil. Telegramda yozasiz, buyruq shu kuniyoq tayyor." },
        { title: "Oy oxiri", text: "Tabel boʻyicha hisoblaymiz, siz vedomostni tasdiqlaysiz." },
        { title: "Toʻlov va hisobot", text: "Toʻlov tayyor, soliqlar hisoblangan, hisobot oʻz vaqtida topshirilgan." },
      ],
      why: [
        { title: "Xato bizdan chiqsa, jarimani biz toʻlaymiz", text: "Bizning aybimiz bilan JShDS notoʻgʻri hisoblansa, jarimani oʻzimiz toʻlaymiz." },
        { title: "Buxgalter ofisingizda, oyiga 3 marta", text: "Kadr hujjatlarini joyida koʻramiz va imzolaymiz." },
        { title: "Maxfiylik", text: "Ish haqi maʼlumotlari eng nozik maʼlumot. Xohlasangiz, NDA imzolaymiz." },
      ],
      price: "Buxgalteriya xizmati shartnomasiga kiradi. Faqat kadrlar va ish haqi boʻlsa, narx xodimlar soniga qarab, birinchi suhbatda.",
      faq: [
        { q: "Xodimlar bir-birining maoshini koʻrmaydimi?", a: "Ish haqi maʼlumotlari faqat siz va bosh buxgalter oʻrtasida. Umumiy guruhga tushmaydi." },
        { q: "Kadr hisobi umuman yuritilmagan boʻlsa-chi?", a: "Ekspress-auditda nima yoʻqligini koʻramiz va hujjatlarni tartibga keltiramiz." },
        { q: "Faqat kadrlar boʻyicha ishlaysizlarmi?", a: "Ha, alohida xizmat sifatida ham ishlaymiz." },
      ],
      related: ["outsourcing", "reporting", "entry-audit"],
    },

    "foreign-trade": {
      ...uzCommon,
      id: "foreign-trade",
      slug: "tashqi-savdo",
      title: "Import va eksport shartnomalarini roʻyxatdan oʻtkazish, Toshkent",
      description:
        "Tashqi savdo shartnomalarini roʻyxatdan oʻtkazish, valyuta nazorati, konvertatsiya, bojxona hujjatlari hisobi. Importchi va eksportchilar uchun, Toshkent.",
      eyebrow: "Tashqi savdo (import-eksport)",
      h1: "Tashqi savdo shartnomasi. Konvertatsiya 5 daqiqada",
      lead:
        "Import-eksportda kechikish bu bojxonada turgan tovar va kursdagi yoʻqotish. Shartnomani roʻyxatdan oʻtkazamiz, valyuta nazoratini yuritamiz, shoshilinch toʻlov va konvertatsiyani 5 daqiqada rasmiylashtiramiz.",
      forWhom: [
        "Import yoki eksport bilan shugʻullanadigan MChJlar",
        "Birinchi tashqi savdo shartnomasini tuzayotgan firmalar",
        "Valyuta nazorati boʻyicha talabnoma olgan kompaniyalar",
      ],
      includes: [
        "Import va eksport shartnomalarini roʻyxatdan oʻtkazish",
        "Valyuta nazorati va muddatlarni kuzatish",
        "Konvertatsiya va chet elga toʻlov uchun hujjatlar",
        "Bojxona deklaratsiyalari hisobi",
        "Import QQS va bojlarni hisoblash",
      ],
      process: [
        { title: "Shartnoma", text: "Shartnomani koʻramiz, roʻyxatdan oʻtkazamiz, valyuta nazorati muddatlarini belgilaymiz." },
        { title: "Toʻlov", text: "Chet elga toʻlov yoki konvertatsiya. Hujjatlar 5 daqiqada, bank yopilmasdan oldin." },
        { title: "Tovar va hisob", text: "Bojxona hujjatlari hisobga kiradi, QQS toʻgʻri hisoblanadi, muddatlar nazoratda." },
      ],
      why: [
        { title: "Shoshilinch toʻlov 5 daqiqada", text: "Kurs tushganda ulgurish bu pul." },
        { title: "Sohada tajriba", text: "Tashqi savdo asosiy yoʻnalishlarimizdan biri." },
        { title: "NDA", text: "Chet ellik taʼsischisi bor kompaniyalar uchun xohlasangiz maxfiylik shartnomasini imzolaymiz." },
      ],
      price: "Buxgalteriya xizmati shartnomasiga kiradi. Faqat shartnomani roʻyxatdan oʻtkazish boʻlsa, narxni birinchi suhbatda aytamiz.",
      faq: [
        { q: "Shartnomani roʻyxatdan oʻtkazish necha kun?", a: "Hujjatlar toʻliq boʻlsa, odatda 1–2 ish kuni." },
        { q: "Chet ellik taʼsischi boʻlsa, hisobot boshqachami?", a: "Asosiy hisobotlar bir xil. Lekin koʻpincha taʼsischi uchun hisobot va NDA soʻrashadi. Ikkalasi ham bizda bor." },
        { q: "Bojxona brokeri bilan ishlaysizlarmi?", a: "Ha, bojxona hujjatlarini brokerdan olamiz va hisobga qoʻyamiz." },
      ],
      related: ["outsourcing", "counterparty", "tax-reduction"],
    },

    counterparty: {
      ...uzCommon,
      id: "counterparty",
      slug: "kontragentlarni-tekshirish",
      title: "Kontragentlarni tekshirish, Toshkent",
      description:
        "Kontragentni shartnomadan oldin tekshiramiz: soliq holati, QQS, qarzlar, xavf belgilari. Shubhali kontragent sizning QQS va tekshiruv xavfingiz. MChJ uchun.",
      eyebrow: "Kontragentlarni tekshirish",
      h1: "Tekshirilmagan kontragent. QQS sizning boʻyningizda qoladi",
      lead:
        "Yetkazib beruvchi «xavfli» roʻyxatga tushsa, uning hisob-fakturasi boʻyicha QQS qabul qilinmaydi va sizga qoʻshimcha soliq hisoblanadi. Shartnomadan oldin tekshiramiz va har oy barcha kontragentlarni qayta koʻrib chiqamiz.",
      forWhom: [
        "Yangi yetkazib beruvchi bilan katta shartnoma tuzayotgan firmalar",
        "Kameral tekshiruvda «xavfli kontragent uchun» QQSi olib tashlangan kompaniyalar",
        "Oʻnlab kontragenti bor va ularni hech qachon tekshirmagan ulgurji savdo",
      ],
      includes: [
        "Shartnomadan oldin tekshirish: reyestr, QQS holati, xavf belgilari",
        "Barcha faol kontragentlarni har oy kuzatish",
        "Kontragent xavfli boʻlib qolsa, darhol xabar beramiz va nima qilishni aytamiz",
        "Solishtirma dalolatnomalar",
      ],
      process: [
        { title: "Soʻrov", text: "Telegramda STIR yuborasiz. Tez orada javob olasiz: ishlash mumkinmi yoki yoʻq." },
        { title: "Har oy", text: "Barcha kontragentlarni qayta tekshiramiz. Holati oʻzgarsa, siz bilasiz." },
        { title: "Xavf boʻlsa", text: "Qaysi hisob-faktura xavf ostida, nima qilish kerak. Aniq reja." },
      ],
      why: [
        { title: "Savolga tez javob", text: "Shartnoma imzolangunicha ulguramiz." },
        { title: "Har oy, soʻrovsiz", text: "Buxgalteriya xizmati shartnomasiga oylik kuzatuv kiradi." },
        { title: "Xavfni oldindan koʻramiz", text: "Kameral tekshiruvdan keyin emas, hisob-faktura kelganda." },
      ],
      price: "Buxgalteriya xizmati shartnomasiga kiradi (oylik kuzatuv bilan). Bir martalik tekshiruv narxini birinchi suhbatda aytamiz.",
      faq: [
        { q: "Kontragent xavfli chiqsa, nima qilish kerak?", a: "Shartnomadan oldin boʻlsa, boshqa yetkazib beruvchi. Hisob-faktura allaqachon boʻlsa, reja: hujjatlarni mustahkamlash va tekshiruvga tayyorlanish." },
        { q: "Oʻzim tekshira olamanmi?", a: "Asosiy holatni ha, soliq toʻlovchi kabinetida. Lekin har oy oʻnlab kontragentni tekshirish vaqt oladi. Buni biz qilamiz." },
        { q: "Eski kontragentlarni ham tekshirasizlarmi?", a: "Ekspress-auditda hammasini. Keyin har oy." },
      ],
      related: ["audit-defense", "outsourcing", "reporting"],
    },

    "entry-audit": {
      ...uzCommon,
      id: "entry-audit",
      slug: "buxgalteriya-auditi",
      title: "Buxgalteriya auditi (ekspress-audit), Toshkent",
      description:
        "Oxirgi davr buxgalteriyasini tekshiramiz: xatolar, ortiqcha toʻlangan soliq, qoʻllanmagan imtiyozlar, ombor bilan farqlar. Natija: roʻyxat va tuzatish rejasi.",
      eyebrow: "Ekspress-audit",
      h1: "Buxgalteringiz ishini birinchi marta tashqaridan koʻring",
      lead:
        "Ega buxgalterning ishiga baho bera olmaydi. Buni faqat boshqa buxgalter qila oladi. Biz oxirgi davrni tekshiramiz va aniq roʻyxat beramiz: qayerda xato, qayerda ortiqcha toʻlov, qayerda tekshiruv xavfi. Bu har bir mijoz bilan birinchi qadamimiz.",
      forWhom: [
        "«Buxgalterdan shubhalanaman, lekin isbotlay olmayman» degan egalar",
        "Buxgalteri almashayotgan va ishni qabul qilishdan oldin holatni bilishi kerak boʻlgan firmalar",
        "Biz bilan ishlashni oʻylayotgan, lekin avval «nima topasizlar» deb koʻrmoqchi boʻlgan kompaniyalar",
      ],
      includes: [
        "Oxirgi davr hisobotlarini tekshirish (odatda joriy yil)",
        "Ombor qoldigʻi va 1C ni solishtirish",
        "Qoʻllanmagan imtiyozlar va ortiqcha toʻlangan soliqlar",
        "Kontragentlar boʻyicha xavflar",
        "Kadr hujjatlarining holati",
        "Natija: xatolar roʻyxati, xavf summasi, tuzatish rejasi",
      ],
      process: [
        { title: "Kirish", text: "1C bazasi va soliq toʻlovchi kabineti. Soʻrasangiz, NDA bilan." },
        { title: "Tekshiruv", text: "Hajmga qarab bir necha kun. Buxgalteringizdan hech narsa soʻramaymiz, u ishlashda davom etadi." },
        { title: "Natija", text: "Uchrashuvda (bizning ofisda yoki Zoomda) roʻyxatni koʻrsatamiz. Keyingi qaror sizniki." },
      ],
      why: [
        { title: "Buxgalteringizga qarshi emas", text: "Roʻyxat bu faktlar. Xato boʻlmasa, shunday deymiz. «Hammasi yomon» deb qoʻrqitmaymiz." },
        { title: "Har bir mijoz shu qadamdan boshlaydi", text: "Koʻrmasdan ishni qabul qilmaymiz, chunki javobgarlik bizga oʻtadi." },
        { title: "Majburiyatsiz", text: "Tekshiruvdan keyin biz bilan ishlash shart emas. Roʻyxat sizda qoladi." },
      ],
      price: "Alohida xizmat. Narx davr va hujjatlar hajmiga bogʻliq, birinchi suhbatda aytamiz. Keyin shartnoma tuzsak, tekshiruv narxi hisobga olinadi.",
      faq: [
        { q: "Buxgalterim bilib qoladimi?", a: "Xohlamasangiz, yoʻq. Kirishni siz berasiz, buxgalteringiz bilan gaplashmaymiz." },
        { q: "Necha kun davom etadi?", a: "Hajmga bogʻliq. Kichik firmaga 2–3 kun, kattaroqqa bir hafta. Suhbatda aytamiz." },
        { q: "Xato topmasangiz-chi?", a: "Shunday deymiz. Bu ham natija: buxgalteringizga ishonch." },
      ],
      related: ["outsourcing", "tax-refund", "counterparty"],
    },
  },

  ru: {
    outsourcing: {
      ...ruCommon,
      id: "outsourcing",
      slug: "autsorsing-buhgalterii",
      title: "Аутсорсинг бухгалтерии в Ташкенте для ООО",
      description:
        "Полный бухгалтерский и налоговый учёт для ООО. Главный бухгалтер с опытом с 2016 года, ответ за 10 минут, штраф по нашей ошибке платим сами. Ташкент.",
      eyebrow: "Аутсорсинг бухгалтерии · Ташкент",
      h1: "Бухгалтер у вас есть. Налоговый риск — всё ещё на вас",
      lead:
        "Отчёты уходят вовремя — это минимум. Мы нужны для трёх вещей: ответ за 10 минут, законное снижение налогов и ответственность в договоре — штраф по нашей ошибке платим сами.",
      forWhom: [
        "ООО с годовым оборотом от 5 млрд сум и штатом от 5 человек",
        "Собственник, у которого есть бухгалтер, но нет понимания, сколько налогов выйдет в конце месяца",
        "Бухгалтер уходит (декрет, пенсия, другая работа) — и дела передать некому",
        "Производство, услуги, оптовая торговля, импорт-экспорт, маркетплейсы",
      ],
      includes: [
        "Полный бухгалтерский и налоговый учёт — в 1С",
        "Сдача всей отчётности в срок",
        "Банковские операции, счета-фактуры, акты сверки",
        "Контроль дебиторской и кредиторской задолженности",
        "Консультации по законному снижению налогов — без отдельного процента",
        "Каждый месяц отчёт директору: сколько налогов вышло, почему и к чему готовиться",
        "Бухгалтер у вас в офисе — 3 раза в месяц",
      ],
      process: [
        { title: "Звонок — 10 минут", text: "Бекзод задаст два-три вопроса о вашем учёте и скажет, где обычно прячется главный риск." },
        { title: "Экспресс-аудит", text: "Смотрим последний период. Находим старые ошибки, даём план исправления. Не глядя дела не берём." },
        { title: "Договор и приём дел", text: "Документы, базу 1С и доступы забираем вместе с вами. Открываем общую группу в Telegram." },
        { title: "Каждый месяц", text: "Отчёты в срок, сверка со складом, отчёт вам. На связи 24/7." },
      ],
      why: [
        { title: "Ответ — до 10 минут", text: "24/7, в субботу тоже. Срочный платёж — 5 минут." },
        { title: "Наша ошибка — наш штраф", text: "Если штраф возник по нашей вине, платим сами. Условие одно: склад ведётся честно." },
        { title: "Берём мало компаний", text: "Чтобы проверять каждую до конца. Пять фирм на одном бухгалтере — это не про нас." },
      ],
      price:
        "Цена зависит от объёма документов в месяц, не от оборота. Процент от сэкономленных налогов не берём. Точная цифра — на первом звонке, после того как узнаем объём.",
      faq: [
        { q: "Мне нужно увольнять своего бухгалтера?", a: "Нет, не сразу. Экспресс-аудит покажет и работу вашего бухгалтера. Посмотрите результат и решите сами." },
        { q: "Наши документы в безопасности?", a: "По запросу подписываем NDA. Работаем только в лицензионной 1С, на защищённых компьютерах с лицензионным антивирусом." },
        { q: "Работаете за пределами Ташкента?", a: "В основном в Ташкенте и области — потому что бухгалтер выезжает к вам 3 раза в месяц." },
      ],
      related: ["entry-audit", "tax-reduction", "reporting"],
    },

    reporting: {
      ...ruCommon,
      id: "reporting",
      slug: "sdacha-otchetnosti",
      title: "Сдача налоговой отчётности ООО — Ташкент",
      description:
        "Сдаём НДС, НДФЛ, соцналог и остальную отчётность ООО в срок. Штраф за просрочку 4–5 млн сум — если ошибка наша, платим сами. Ташкент.",
      eyebrow: "Налоговая отчётность · Ташкент",
      h1: "Отчёт в срок — штраф по нашей ошибке платим мы",
      lead:
        "Один отчёт на день позже — 4–5 млн сум штрафа. Мы сдаём отчётность в срок, заранее говорим, сколько налогов выйдет, а если штраф возник по нашей ошибке — платим сами.",
      forWhom: [
        "Собственник, который видит только сообщение «отчёт отправлен» — и больше ничего",
        "Компания, которая в последний день услышала от бухгалтера «сегодня не успеем»",
        "Фирма, получившая требование из налоговой и не знающая, что ответить",
      ],
      includes: [
        "Декларация по НДС — ежемесячно",
        "Отчёты по НДФЛ и социальному налогу",
        "Налог на прибыль / налог с оборота — по режиму",
        "Статистическая отчётность",
        "Ответы на требования налоговой",
        "Каждый месяц вам: сколько налогов вышло, почему, к чему готовиться в следующем",
      ],
      process: [
        { title: "Собираем документы", text: "Через  и 1С. Недостающее запрашиваем за 5 дней до срока, а не в последний день." },
        { title: "Готовим и проверяем", text: "Сверяем с остатками склада и контрагентами. Ошибку находим до сдачи." },
        { title: "Вы подтверждаете — мы сдаём", text: "Сумму видите до отправки. Неожиданных налогов не бывает." },
      ],
      why: [
        { title: "Наша ошибка — наш штраф", text: "Просрочка или неверный отчёт по нашей вине — штраф платим мы. Прописано в договоре." },
        { title: "Говорим заранее", text: "Сколько выйдет налогов, знаете до срока — не «платите», а время подготовиться." },
        { title: "Лицензионное ПО и защищённые компьютеры", text: "1С и личный кабинет налогоплательщика — официально. Компьютеры защищены лицензионным антивирусом, данные не уходят наружу." },
      ],
      price:
        "Сдача отчётности — не отдельная услуга, она входит в договор аутсорсинга. Цена зависит от объёма документов.",
      faq: [
        { q: "Что с отчётами, которые не сдал прошлый бухгалтер?", a: "Найдём на экспресс-аудите, покажем, что осталось открытым, дадим план. Ответственность за прошлый период обсуждаем отдельно." },
        { q: "Могу увидеть отчёт до сдачи?", a: "Да. Сумму и из чего она сложилась видите до отправки." },
        { q: "Срок сдачи выпадает на выходной?", a: "Мы на связи 24/7. Если срок на выходной — сдаём раньше." },
      ],
      related: ["outsourcing", "audit-defense", "entry-audit"],
    },

    "tax-reduction": {
      ...ruCommon,
      id: "tax-reduction",
      slug: "snizhenie-nalogov",
      title: "Законное снижение налогов для ООО — Ташкент",
      description:
        "Из действующих налоговых льгот находим и применяем подходящие вам. Процент от экономии не берём — это входит в работу. Для ООО, Ташкент.",
      eyebrow: "Законное снижение налогов",
      h1: "Сосед платит меньше налогов. Почему?",
      lead:
        "Обычно ответ простой: его бухгалтер применил льготу, ваш — нет. В Узбекистане десятки налоговых льгот. Разбираем, какие подходят вам, и применяем — без отдельного процента.",
      forWhom: [
        "Оборот вырос, налоги тоже — а законный способ платить меньше никто не показывает",
        "Собственник, который слышал, что похожая фирма платит меньше",
        "Компания, которая узнаёт о новых льготах из Instagram",
        "Фирма, где налоговый режим выбрали 3 года назад и с тех пор не пересматривали",
      ],
      includes: [
        "Определение льгот, подходящих вашей отрасли",
        "Анализ налогового режима и смена при необходимости",
        "Возврат переплаченных налогов",
        "Сообщаем о новых законах и льготах первыми",
        "Каждый месяц: какая льгота применена и сколько сэкономила",
      ],
      process: [
        { title: "Анализ", text: "По отчётам за последний период, отрасли, обороту и штату смотрим, какие льготы подходят." },
        { title: "Говорим честно", text: "Подходящее применяем. Не подходит — говорим прямо. Льготы с неба не берём: например, в добывающих отраслях их нет." },
        { title: "Применение и контроль", text: "Льгота входит в отчёт, результат видите каждый месяц." },
      ],
      why: [
        { title: "Без процента", text: "Отдельный процент от сэкономленного не берём. Снижение налогов — часть нашей работы." },
        { title: "Только законно", text: "Наличные продажи, «показать меньше» — это не к нам. Мы берём риск на себя, поэтому только честный путь." },
        { title: "Сообщаем первыми", text: "Вышла новая льгота — узнаете от нас, а не из Instagram." },
      ],
      price:
        "Входит в договор аутсорсинга. Ни отдельного процента, ни отдельной оплаты. На экспресс-аудите заранее скажем, какие льготы подходят.",
      faq: [
        { q: "Это законно?", a: "Да. Только льготы и режимы из Налогового кодекса. Со скрытым оборотом и наличными продажами не работаем — это в договоре." },
        { q: "Сколько можно сэкономить?", a: "Зависит от отрасли. В некоторых (например, добыча) льгот нет вообще — скажем заранее. Точная цифра после экспресс-аудита." },
        { q: "Почему мой бухгалтер этого не сделал?", a: "Обычно нет времени: один человек ведёт несколько фирм и не успевает следить за законами. Это не его вина — так устроена система." },
      ],
      related: ["tax-refund", "regime", "outsourcing"],
    },

    "tax-refund": {
      ...ruCommon,
      id: "tax-refund",
      slug: "vozvrat-pereplaty-nalogov",
      title: "Возврат переплаты по налогам — Ташкент",
      description:
        "Находим переплаченные налоги и возвращаем их или зачитываем в счёт будущих платежей. Пока не истёк срок. Для ООО, Ташкент.",
      eyebrow: "Переплата по налогам",
      h1: "Переплаченный налог — это ваши деньги",
      lead:
        "Бухгалтер платит «с запасом, чтобы спокойнее», собственник не знает. Эти деньги лежат у государства, и их можно вернуть — но есть срок. Мы находим переплату и возвращаем.",
      forWhom: [
        "Собственник, который спросил: «Почему я плачу больше соседа?»",
        "Фирма, где режим изменился, а платить продолжили по старой ставке",
        "Компания, где сменился бухгалтер и прошлый период никто не проверял",
      ],
      includes: [
        "Выявление переплаты за последние периоды",
        "Акт сверки с налоговой",
        "Заявление и документы на возврат или зачёт",
        "Сопровождение до результата",
      ],
      process: [
        { title: "Сверка", text: "Сравниваем личный кабинет и 1С, показываем переплату по периодам." },
        { title: "Заявление", text: "Возврат или зачёт в счёт будущих платежей — что выгоднее вам." },
        { title: "Результат", text: "Деньги возвращаются на счёт или удерживаются из следующего налога. Каждый шаг видите." },
      ],
      why: [
        { title: "Без процента", text: "С возвращённой суммы процент не берём." },
        { title: "Находим на экспресс-аудите", text: "Переплата — одно из первого, что смотрим у нового клиента." },
        { title: "Следим за сроком", text: "Истёк срок возврата — деньги не вернутся. Мы действуем раньше." },
      ],
      price:
        "Для клиентов аутсорсинга — в рамках договора. Отдельное обращение — цена по объёму документов, на первом звонке.",
      faq: [
        { q: "За сколько лет можно вернуть?", a: "В законе есть срок — поэтому проверку не стоит откладывать. Точный срок скажем на звонке по вашей ситуации." },
        { q: "Налоговая не начнёт проверку?", a: "Акт сверки — обычная процедура. Если документы в порядке, повода для проверки нет. Поэтому сначала проверяем сами." },
        { q: "Зачёт лучше возврата?", a: "Часто быстрее. Что выгоднее — подскажем по ситуации." },
      ],
      related: ["tax-reduction", "entry-audit", "regime"],
    },

    regime: {
      ...ruCommon,
      id: "regime",
      slug: "smena-nalogovogo-rezhima",
      title: "Смена налогового режима ООО — Ташкент",
      description:
        "С налога с оборота на НДС или обратно — считаем, какой режим вам дешевле, и переводим. Для ООО, Ташкент.",
      eyebrow: "Налоговый режим",
      h1: "Неверный режим — переплата каждый месяц",
      lead:
        "Когда оборот переходит 1 млрд сум, режим меняется — и многие фирмы к этому не готовы. Мы считаем налог в обоих режимах на ваших цифрах, выбираем выгодный и оформляем переход.",
      forWhom: [
        "Фирма, оборот которой приближается к 1 млрд сум",
        "Компания, где режим выбрали 2–3 года назад и с тех пор не пересчитывали",
        "Фирма, начавшая работать с контрагентами-плательщиками НДС",
      ],
      includes: [
        "Расчёт налоговой нагрузки в двух режимах — на ваших цифрах",
        "Сроки и условия перехода",
        "Подготовка и подача заявления и документов",
        "Контроль первых отчётов после перехода",
      ],
      process: [
        { title: "Расчёт", text: "По данным за 12 месяцев: сколько в текущем режиме, сколько в другом." },
        { title: "Решение", text: "Показываем цифры, решаете вы. «Надо переходить» не навязываем — иногда выгоднее остаться." },
        { title: "Переход", text: "Заявление, сроки, первый отчёт — всё на нас." },
      ],
      why: [
        { title: "Говорим заранее", text: "Когда оборот приближается к порогу — а не после того, как его перешли." },
        { title: "Без процента", text: "С сэкономленного процент не берём." },
        { title: "Только законно", text: "«Придержать» оборот, скрыв продажи, — это не к нам." },
      ],
      price: "Входит в договор аутсорсинга. Отдельное обращение — на первом звонке.",
      faq: [
        { q: "Можно сменить режим в середине года?", a: "Зависит от ситуации — часть переходов только с начала года, часть обязательна (при превышении порога). На звонке скажем точно." },
        { q: "Перейду на НДС — налоги не вырастут?", a: "Не всегда. Если ваши контрагенты платят НДС, входящий НДС снижает нагрузку. Посчитаем и покажем." },
        { q: "Мой бухгалтер об этом не говорил.", a: "Часто нет времени. Это один из первых вопросов экспресс-аудита." },
      ],
      related: ["tax-reduction", "tax-refund", "outsourcing"],
    },

    "audit-defense": {
      ...ruCommon,
      id: "audit-defense",
      slug: "nalogovaya-proverka",
      urgent: true,
      title: "Налоговая проверка: документы и возражения — Ташкент",
      description:
        "Пришла камеральная или выездная проверка? Готовим документы, пишем возражение на акт, сопровождаем юридически. Позвоните сегодня. Ташкент.",
      eyebrow: "Налоговая проверка · срочно",
      h1: "Пришла проверка. Первые 24 часа решают",
      lead:
        "У требования или акта проверки есть срок ответа. Пропустите — доначисление подтвердится автоматически. Мы готовим документы, пишем возражение и идём до конца.",
      forWhom: [
        "Фирма, получившая требование или акт из налоговой",
        "Компания, которой по камеральной проверке доначислили налог",
        "Собственник, чей бухгалтер сказал «не знаю» — или уже ушёл",
      ],
      includes: [
        "Анализ требования и определение срока ответа",
        "Пакет документов для камеральной и выездной проверки",
        "Возражение на акт проверки — обоснованное",
        "Общение с налоговой — мы, а не вы",
        "Юридическое сопровождение",
      ],
      process: [
        { title: "Сегодня", text: "Присылаете требование — в тот же день говорим срок и риск." },
        { title: "В течение 3 дней", text: "Пакет документов и проект возражения. Вы смотрите и подтверждаете." },
        { title: "До конца", text: "Подача, ответ, при необходимости следующий этап. Каждый шаг видите в Telegram." },
      ],
      why: [
        { title: "Ответ — до 10 минут", text: "Во время проверки это не время — это деньги." },
        { title: "Говорим честно", text: "Если доначисление обоснованно — не берём деньги за «борьбу», а показываем, как заплатить меньше." },
        { title: "Потом — не повторится", text: "После проверки закрываем причину: склад, контрагенты, отчёты." },
      ],
      price:
        "Отдельная услуга — цена зависит от вида проверки и объёма документов. Скажем на первом звонке. Для клиентов аутсорсинга — в рамках договора.",
      faq: [
        { q: "У меня есть бухгалтер, нужна помощь только с проверкой.", a: "Можно. Это отдельная услуга, работаем и без договора на ведение." },
        { q: "Возражение помогает?", a: "Если обоснованно — да, часто сумма снижается или отменяется. Если нет — скажем заранее." },
        { q: "А если срок уже прошёл?", a: "Всё равно звоните — на некоторых этапах возможность ещё есть." },
      ],
      related: ["unblock", "counterparty", "entry-audit"],
      cta: "Позвоните прямо сейчас",
      ctaNote: "При проверке каждый день на счету. Бекзод перезвонит за 10 минут — или сразу +998 97 732 18 48.",
    },

    unblock: {
      ...ruCommon,
      id: "unblock",
      slug: "razblokirovka-scheta",
      urgent: true,
      title: "Разблокировка расчётного счёта — Ташкент",
      description:
        "Банк заблокировал расчётный счёт? Находим причину сегодня, готовим документы, снимаем блокировку. Для ООО, Ташкент.",
      eyebrow: "Счёт заблокирован · срочно",
      h1: "Счёт заблокирован — причину находим сегодня",
      lead:
        "Блокировка — это остановленные платежи, ждущие поставщики и зарплата. Причина чаще всего простая: несданный отчёт или неоплаченная задолженность. Мы находим причину и закрываем её.",
      forWhom: [
        "Фирма, где банк не проводит платёж «по решению налоговой»",
        "Компания, узнавшая о несданном отчёте только после блокировки",
        "Собственник с несколькими блокировками, не знающий, с какой начать",
      ],
      includes: [
        "Определение причины — через кабинет налогоплательщика и банк",
        "Подготовка и сдача недостающих отчётов",
        "Расчёт задолженности и порядок оплаты",
        "Заявление и документы на снятие блокировки",
        "Закрытие причины, чтобы не повторилось",
      ],
      process: [
        { title: "Сегодня", text: "Заходим в кабинет, видим причину, говорим, что делать." },
        { title: "1–3 дня", text: "Отчёт сдан или долг закрыт, заявление подано." },
        { title: "Блокировка снята", text: "Банк проводит платежи. Дальше — приводим учёт в порядок, чтобы причина не вернулась." },
      ],
      why: [
        { title: "Ответ — до 10 минут", text: "При блокировке каждый час — остановленный платёж." },
        { title: "Говорим честно", text: "Если долг реальный — не «будем спорить», а самый быстрый способ закрыть." },
        { title: "Потом — не повторится", text: "Если причина в отчётах — отчёты теперь в срок, а штраф по нашей ошибке платим мы." },
      ],
      price: "Отдельная услуга — цена зависит от причины и объёма, на первом звонке. Для клиентов аутсорсинга — в рамках договора.",
      faq: [
        { q: "Сколько дней снимается блокировка?", a: "Если причина в отчёте — обычно 1–3 дня после сдачи. Если долг — после оплаты. Точный срок зависит от причины." },
        { q: "У меня есть бухгалтер, нужно только снять блокировку.", a: "Можно. Это отдельная услуга, работаем и без договора на ведение." },
        { q: "Банк тоже может заблокировать?", a: "Да — например, если запрос документов остался без ответа. С какой стороны блокировка — выясняем первым делом." },
      ],
      related: ["audit-defense", "reporting", "outsourcing"],
      cta: "Позвоните прямо сейчас",
      ctaNote: "Бекзод перезвонит за 10 минут — или сразу +998 97 732 18 48.",
    },

    payroll: {
      ...ruCommon,
      id: "payroll",
      slug: "zarplata-i-kadry",
      title: "Расчёт зарплаты и кадровый учёт — аутсорсинг, Ташкент",
      description:
        "Зарплата, НДФЛ, соцналог, алименты, кадровые приказы, трудовые договоры — всё в срок и без ошибок. Для ООО, Ташкент.",
      eyebrow: "Зарплата и кадры",
      h1: "Зарплата, кадры, алименты — без ошибок и в срок",
      lead:
        "Ошибка в зарплате — это спор с сотрудником и проблема с налоговой одновременно. Мы считаем, оформляем приказы и сдаём отчёты — вы только подтверждаете.",
      forWhom: [
        "Фирма со штатом от 5 человек, где кадровое дело «осталось на бумаге»",
        "Компания, где путаются в алиментах, больничных и отпускных",
        "Собственник, который опасается запроса трудовых договоров при проверке",
      ],
      includes: [
        "Расчёт зарплаты, НДФЛ и социального налога",
        "Алименты, отпускные, больничные",
        "Кадровые приказы: приём, отпуск, увольнение",
        "Трудовые договоры и трудовые книжки",
        "Отчётность по зарплате",
        "Контроль табеля",
      ],
      process: [
        { title: "В течение месяца", text: "Приём, увольнение, отпуск — пишете в Telegram, приказ готов в тот же день." },
        { title: "Конец месяца", text: "Считаем по табелю, вы подтверждаете ведомость." },
        { title: "Выплата и отчёт", text: "Платёж готов, налоги посчитаны, отчёт сдан в срок." },
      ],
      why: [
        { title: "Наша ошибка — наш штраф", text: "Штраф за неверно посчитанный НДФЛ по нашей вине — платим мы." },
        { title: "Бухгалтер у вас в офисе — 3 раза в месяц", text: "Кадровые документы смотрим и подписываем на месте." },
        { title: "Конфиденциальность", text: "Зарплатные данные — самые чувствительные. По запросу NDA." },
      ],
      price: "Входит в договор аутсорсинга. Только кадры и зарплата — по числу сотрудников, на первом звонке.",
      faq: [
        { q: "Сотрудники не увидят зарплаты друг друга?", a: "Зарплатные данные — только между вами и главным бухгалтером. В общую группу не попадают." },
        { q: "Кадровый учёт вообще не вёлся?", a: "На экспресс-аудите смотрим, чего нет, и приводим документы в порядок." },
        { q: "Работаете только по кадрам?", a: "Да, как отдельная услуга тоже." },
      ],
      related: ["outsourcing", "reporting", "entry-audit"],
    },

    "foreign-trade": {
      ...ruCommon,
      id: "foreign-trade",
      slug: "ved-kontrakty",
      title: "Регистрация импортных и экспортных контрактов — Ташкент",
      description:
        "Регистрация ВЭД-контрактов, валютный контроль, конвертация, учёт таможенных документов. Для импортёров и экспортёров, Ташкент.",
      eyebrow: "ВЭД (импорт-экспорт)",
      h1: "ВЭД-контракт — конвертация за 5 минут",
      lead:
        "В импорте-экспорте задержка — это товар на таможне и потеря на курсе. Регистрируем контракт, ведём валютный контроль, срочный платёж и конвертацию оформляем за 5 минут.",
      forWhom: [
        "ООО, занимающееся импортом или экспортом",
        "Фирма, заключающая первый внешнеторговый контракт",
        "Компания, получившая требование по валютному контролю",
      ],
      includes: [
        "Регистрация импортных и экспортных контрактов",
        "Валютный контроль и отслеживание сроков",
        "Документы на конвертацию и платежи за рубеж",
        "Учёт таможенных деклараций",
        "Расчёт импортного НДС и пошлин",
      ],
      process: [
        { title: "Контракт", text: "Смотрим контракт, регистрируем, ставим сроки валютного контроля." },
        { title: "Платёж", text: "Платёж за рубеж или конвертация — документы за 5 минут, пока банк не закрылся." },
        { title: "Товар и учёт", text: "Таможенные документы входят в учёт, НДС посчитан верно, сроки под контролем." },
      ],
      why: [
        { title: "Срочный платёж — 5 минут", text: "Успеть, пока курс упал, — это деньги." },
        { title: "Опыт в отрасли", text: "ВЭД — одно из наших основных направлений." },
        { title: "NDA", text: "Для компаний с иностранными учредителями — по запросу соглашение о неразглашении." },
      ],
      price: "Входит в договор аутсорсинга. Только регистрация контракта — на первом звонке.",
      faq: [
        { q: "Сколько дней регистрация контракта?", a: "При полном пакете документов — обычно 1–2 рабочих дня." },
        { q: "Иностранный учредитель — отчётность другая?", a: "Основная отчётность та же, но чаще просят отчёт учредителю и NDA — и то и другое у нас есть." },
        { q: "Работаете с таможенным брокером?", a: "Да, таможенные документы забираем у брокера и ставим на учёт." },
      ],
      related: ["outsourcing", "counterparty", "tax-reduction"],
    },

    counterparty: {
      ...ruCommon,
      id: "counterparty",
      slug: "proverka-kontragentov",
      title: "Проверка контрагентов — Ташкент",
      description:
        "Проверяем контрагента до договора: налоговый статус, НДС, долги, признаки риска. Сомнительный контрагент — ваш риск по НДС и проверке. Для ООО.",
      eyebrow: "Проверка контрагентов",
      h1: "Непроверенный контрагент — НДС остаётся на вас",
      lead:
        "Если поставщик попадает в «рисковые» — НДС по его счёту-фактуре не принимается, и вам доначисляют налог. Проверяем до договора и раз в месяц пересматриваем всех контрагентов.",
      forWhom: [
        "Фирма, заключающая крупный договор с новым поставщиком",
        "Компания, которой на камеральной проверке сняли НДС «за рискового контрагента»",
        "Оптовая торговля с десятками контрагентов, которых никогда не проверяли",
      ],
      includes: [
        "Проверка до договора: реестр, статус НДС, признаки риска",
        "Ежемесячный мониторинг всех активных контрагентов",
        "Если контрагент стал рисковым — сразу сообщаем и говорим, что делать",
        "Акты сверки",
      ],
      process: [
        { title: "Запрос", text: "Присылаете ИНН в Telegram — за 10 минут ответ: можно ли работать." },
        { title: "Каждый месяц", text: "Перепроверяем всех контрагентов. Статус изменился — вы знаете." },
        { title: "Если риск", text: "Какой счёт-фактура под угрозой, что делать — конкретный план." },
      ],
      why: [
        { title: "Ответ — до 10 минут", text: "Успеваем до подписания договора." },
        { title: "Каждый месяц, без запроса", text: "В договор аутсорсинга входит ежемесячный мониторинг." },
        { title: "Видим риск заранее", text: "Не после камеральной проверки — а когда приходит счёт-фактура." },
      ],
      price: "Входит в договор аутсорсинга (с ежемесячным мониторингом). Разовая проверка — на первом звонке.",
      faq: [
        { q: "Контрагент рисковый — что делать?", a: "До договора — другой поставщик. Если счёт-фактура уже есть — план: укрепить документы и подготовиться к проверке." },
        { q: "Могу проверить сам?", a: "Базовый статус — да, в кабинете налогоплательщика. Но десятки контрагентов каждый месяц — это время. Это делаем мы." },
        { q: "Старых контрагентов тоже проверяете?", a: "На экспресс-аудите — всех. Дальше каждый месяц." },
      ],
      related: ["audit-defense", "outsourcing", "reporting"],
    },

    "entry-audit": {
      ...ruCommon,
      id: "entry-audit",
      slug: "audit-buhgalterii",
      title: "Аудит бухгалтерии (экспресс-аудит) — Ташкент",
      description:
        "Проверяем бухгалтерию за последний период: ошибки, переплата налогов, неприменённые льготы, расхождения со складом. Результат — список и план исправления.",
      eyebrow: "Экспресс-аудит",
      h1: "Впервые посмотрите на работу бухгалтера со стороны",
      lead:
        "Собственник не может оценить работу бухгалтера — только другой бухгалтер. Мы проверяем последний период и даём конкретный список: где ошибка, где переплата, где риск проверки. Это наш первый шаг с каждым клиентом.",
      forWhom: [
        "Собственник: «Подозреваю бухгалтера, но доказать не могу»",
        "Фирма, где меняется бухгалтер и нужно знать состояние дел до приёма",
        "Компания, которая думает работать с нами, но сначала хочет увидеть, «что найдёте»",
      ],
      includes: [
        "Проверка отчётности за последний период (обычно текущий год)",
        "Сверка остатков склада и 1С",
        "Неприменённые льготы и переплаченные налоги",
        "Риски по контрагентам",
        "Состояние кадровых документов",
        "Результат: список ошибок, сумма риска, план исправления",
      ],
      process: [
        { title: "Доступ", text: "База 1С и кабинет налогоплательщика — с NDA, если попросите." },
        { title: "Проверка", text: "Несколько дней в зависимости от объёма. У вашего бухгалтера ничего не спрашиваем — он продолжает работать." },
        { title: "Результат", text: "На встрече (у нас в офисе или в Zoom) показываем список. Дальше решение за вами." },
      ],
      why: [
        { title: "Не против вашего бухгалтера", text: "Список — это факты. Если ошибок нет, так и скажем. «Всё плохо» не пугаем." },
        { title: "Каждый клиент начинает с этого шага", text: "Не глядя дела не берём, потому что ответственность переходит к нам." },
        { title: "Без обязательств", text: "После проверки работать с нами не обязательно. Список остаётся у вас." },
      ],
      price: "Отдельная услуга — цена зависит от периода и объёма документов, на первом звонке. Если потом заключаем договор, стоимость проверки зачитывается.",
      faq: [
        { q: "Мой бухгалтер узнает?", a: "Если не хотите — нет. Доступ даёте вы, с вашим бухгалтером мы не общаемся." },
        { q: "Сколько дней?", a: "Зависит от объёма — небольшой фирме 2–3 дня, крупнее — неделя. Скажем на звонке." },
        { q: "А если ошибок не найдёте?", a: "Так и скажем. Это тоже результат — уверенность в вашем бухгалтере." },
      ],
      related: ["outsourcing", "tax-refund", "counterparty"],
    },
  },
};

export const serviceOrder: ServiceId[] = [
  "outsourcing",
  "entry-audit",
  "tax-reduction",
  "reporting",
  "audit-defense",
  "unblock",
  "tax-refund",
  "regime",
  "counterparty",
  "payroll",
  "foreign-trade",
];
