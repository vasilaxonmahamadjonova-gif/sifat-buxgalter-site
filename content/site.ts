import type { Locale } from "./services";

export const contacts = {
  phone1: "+998 97 732 18 48",
  phone1Href: "tel:+998977321848",
  phone2: "+998 94 647 80 45",
  phone2Href: "tel:+998946478045",
  telegram: "https://t.me/Davronbekov_Bekzod",
  telegramHandle: "@Davronbekov_Bekzod",
  instagram: "https://instagram.com/sifatbuxgalter",
  map: "https://www.google.com/maps/search/?api=1&query=Muqimiy+ko%27chasi+Yakkasaroy+Toshkent",
};

export const clients: { name: string; file: string }[] = [
  { name: "Avangard", file: "avangard" },
  { name: "Aiwa", file: "aiwa" },
  { name: "Роллтон", file: "rollton" },
  { name: "Klass Export", file: "klass-export" },
  { name: "Inesis", file: "inesis" },
  { name: "Profit Stone", file: "profit-stone" },
  { name: "Poytaxt Aqua Wave", file: "poytaxt" },
  { name: "Oq Tepa Dental", file: "oq-tepa-dental" },
  { name: "Bumble", file: "bumble" },
  { name: "Жалын Көмір", file: "zhalyn-komir" },
  { name: "TSG", file: "tsg" },
  { name: "West Med Group", file: "west-med" },
];

export type UiStrings = {
  skip: string;
  nav: { services: string; pricing: string; team: string; faq: string; contact: string };
  headerCta: string;
  langSwitch: string;
  breadcrumbHome: string;
  breadcrumbServices: string;
  allServices: string;
  relatedTitle: string;
  ctaTitle: string;
  ctaText: string;
  orCall: string;
  telegramLine: string;
  form: {
    name: string;
    phone: string;
    company: string;
    turnover: string;
    turnovers: string[];
    submit: string;
    sending: string;
    privacy: string;
    privacyLink: string;
    consent: string;
    errorConsent: string;
    error: string;
    errorPhone: string;
  };
  footer: { online: string; office: string; address: string; landmark: string; mapLink: string; contact: string; services: string; copyright: string };
  readMore: string;
  pricingLink: string;
};

export const ui: Record<Locale, UiStrings> = {
  uz: {
    skip: "Asosiy qismga oʻtish",
    nav: { services: "Xizmatlar", pricing: "Narxlar", team: "Jamoa", faq: "Savollar", contact: "Aloqa" },
    headerCta: "Bepul konsultatsiya",
    langSwitch: "RU",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbServices: "Xizmatlar",
    allServices: "Barcha xizmatlar",
    relatedTitle: "Bogʻliq xizmatlar",
    ctaTitle: "Bepul konsultatsiya va narx hisobi",
    ctaText:
      "Telefon raqamingizni qoldiring, Bekzod tez orada bogʻlanadi. Hech qayerga borish shart emas: ofisda uchrashuvni faqat oʻzingiz xohlasangiz belgilaymiz.",
    orCall: "Yoki hoziroq qoʻngʻiroq qiling",
    telegramLine: "Yozishma qulayroqmi? Bekzodga Telegramda yozing",
    form: {
      name: "Ismingiz",
      phone: "Telefon",
      company: "Kompaniya nomi (ixtiyoriy)",
      turnover: "Yillik aylanma",
      turnovers: ["1 mlrd soʻmgacha", "1–5 mlrd soʻm", "5–20 mlrd soʻm", "20 mlrd soʻmdan ortiq"],
      submit: "Konsultatsiya olish",
      sending: "Yuborilmoqda…",
      privacy: "Maʼlumotlaringizni faqat siz bilan bogʻlanish uchun ishlatamiz.",
      privacyLink: "Maxfiylik siyosati",
      consent: "Shaxsiy maʼlumotlarimni qayta ishlashga rozilik beraman.",
      errorConsent: "Davom etish uchun rozilik belgisini qoʻying.",
      error: "Yuborilmadi. Qoʻngʻiroq qiling yoki Telegramda yozing.",
      errorPhone: "Telefon raqamini tekshiring: +998 XX XXX XX XX",
    },
    footer: {
      online: "Aloqadamiz 24/7",
      office: "Ofis",
      address: "Toshkent, Yakkasaroy tumani, Muqimiy koʻchasi",
      landmark: "",
      mapLink: "Xaritada ochish ↗",
      contact: "Aloqa",
      services: "Xizmatlar",
      copyright: "© 2026 Sifat Buxgalter",
    },
    readMore: "Batafsil →",
    pricingLink: "Narx qanday belgilanadi →",
  },
  ru: {
    skip: "К основному содержанию",
    nav: { services: "Услуги", pricing: "Цены", team: "Команда", faq: "Вопросы", contact: "Контакты" },
    headerCta: "Звонок на 10 минут",
    langSwitch: "UZ",
    breadcrumbHome: "Главная",
    breadcrumbServices: "Услуги",
    allServices: "Все услуги",
    relatedTitle: "Связанные услуги",
    ctaTitle: "Бесплатный звонок на 10 минут",
    ctaText:
      "Оставьте телефон — Бекзод свяжется в течение 10 минут. Никаких поездок: встречу в офисе назначим, только если сами захотите.",
    orCall: "Или позвоните прямо сейчас",
    telegramLine: "Удобнее переписка? Напишите Бекзоду в Telegram",
    form: {
      name: "Ваше имя",
      phone: "Телефон",
      company: "Название компании (необязательно)",
      turnover: "Годовой оборот",
      turnovers: ["До 1 млрд сум", "1–5 млрд сум", "5–20 млрд сум", "Больше 20 млрд сум"],
      submit: "Жду звонка",
      sending: "Отправляем…",
      privacy: "Данные используем только чтобы связаться с вами.",
      privacyLink: "Политика конфиденциальности",
      // Yangi qator (RU): rozilik chekboksi qonun talabi. Mijoz tasdiqlashi kerak.
      consent: "Даю согласие на обработку персональных данных.",
      errorConsent: "Поставьте галочку согласия, чтобы продолжить.",
      error: "Не отправилось. Позвоните или напишите в Telegram.",
      errorPhone: "Проверьте номер телефона: +998 XX XXX XX XX",
    },
    footer: {
      online: "На связи 24/7",
      office: "Офис",
      address: "Ташкент, Яккасарайский район, ул. Мукими",
      landmark: "",
      mapLink: "Открыть на карте ↗",
      contact: "Связь",
      services: "Услуги",
      copyright: "© 2026 Sifat Buxgalter",
    },
    readMore: "Подробнее →",
    pricingLink: "Как формируется цена →",
  },
};
