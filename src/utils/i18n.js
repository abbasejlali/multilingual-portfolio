import { createContext, useContext, useEffect, useMemo, useState } from "react";

const messages = {
  en: {
    fullName: "Abbas Ejlali",
    home: "Home",
    about: "About me",
    services: "Services",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact",
    madeBy: "Built by",
    intro:
      "I'm a web developer focused on building clean, responsive, and user-friendly web experiences.",
    aboutSubtitle: "About me",
    aboutTitle: "Who am I?",
    serviceSubtitle: "Services",
    serviceTitle: "What I can do for you",
    portfolioSubtitle: "Portfolio",
    portfolioTitle: "Selected projects",
    blogSubtitle: "Articles",
    blogTitle: "Latest articles",
    contactSubtitle: "Get in touch",
    contactTitle: "Contact me",
    name: "Full name",
    email: "Email address",
    message: "Your message",
    namePlaceholder: "Your name",
    messagePlaceholder: "Write your message here",
    send: "Send message",
    moreDetails: "More details",
    by: "By",
    trustedBrands: "Brands that trusted me",
    funFacts: "A few fun facts",
    projectsCompleted: "Projects completed",
    yearsExperience: "Years of experience",
    clients: "Happy clients",
    language: "Language",
    profileRole: "Frontend Developer",
    serviceNames: [
      "Web development",
      "Graphic design",
      "Game development",
      "Business consulting",
      "Digital marketing",
      "Artificial intelligence",
    ],
    serviceDescription:
      "Thoughtful solutions designed around your goals, usability, and performance.",
    aboutText1:
      "I am a frontend developer who enjoys turning ideas into fast, accessible, and maintainable web applications.",
    aboutText2:
      "I work with modern JavaScript tools and focus on responsive interfaces, clear component architecture, and a smooth user experience.",
    articleTitle: "Choosing the right font for a website",
    projectTitle: "Clothing store built with React and Next.js",
    detailsArticle: "Article details",
    detailsProject: "Project details",
    projectDescription:
      "This project demonstrates a responsive storefront interface built with reusable React components and Next.js routing.",
    projectDescription2:
      "The implementation focuses on clear navigation, product discovery, responsive layouts, and a consistent visual system across screen sizes.",
    projectDescription3:
      "The page structure is built to keep product information easy to scan and the browsing experience consistent across desktop, tablet, and mobile screens.",
    projectClientValue: "Demo project",
    articleDescription:
      "Choosing a website font is an important part of building a readable and accessible user interface.",
    articleDescription2:
      "Consider legibility, language coverage, loading performance, available weights, and how the typeface behaves on mobile and desktop screens.",
    articleDescription3:
      "This is starter copy. Replace it with your own original article before publishing the portfolio.",
    programmingSkills: "Development skills",
    languageSkills: "Language skills",
    wordpress: "WordPress",
    javascript: "JavaScript",
    react: "React",
    english: "English",
    french: "French",
    arabic: "Arabic",
    skills: "Skills",
    webDevelopment: "Web development",
    backendDevelopment: "Backend development",
    uiux: "UI/UX design",
    videoEditing: "Video editing",
    reactNext: "React and Next.js",
    interests: "Interests",
    gameDevelopment: "Game development",
    workingWithAI: "Working with AI",
    football: "Football",
    swimming: "Swimming",
    socialSkills: "Social skills",
    educationHeading: "Education",
    workExperienceHeading: "Work experience",
    testimonials: "Testimonials",
    educationOne: "Education entry 1",
    educationTwo: "Education entry 2",
    educationThree: "Education entry 3",
    degreeOne: "Degree details to be updated",
    degreeTwo: "Degree details to be updated",
    degreeThree: "Degree details to be updated",
    companyOne: "Company entry 1",
    companyTwo: "Company entry 2",
    companyThree: "Company entry 3",
    webDesigner: "Web designer",
    date: "Date",
    share: "Share",
    client: "Client",
    projectLink: "Project link",
    comments: "Comments",
    pricingTitle: "Pricing",
    freePlan: "Free",
    monthly: "/month",
    freeTemplate: "Free template",
    freeFonts: "Free fonts",
    oneMonthSupport: "One month of support",
    customTemplate: "Custom template",
    premiumFonts: "Premium fonts",
    threeMonthsSupport: "Three months of support",
    professionalConsultation: "Professional consultation",
    popular: "Popular",
    professional: "Professional",
    purchase: "Purchase",
    linesOfCode: "Lines of code",
    downloadResume: "Download resume",
    locationLabel: "Location",
    emailLabel: "Email",
    educationLabel: "Education",
    interestsLabel: "Interests",
    experienceLabel: "Experience",
    focusLabel: "Focus",
    projectClient: "Client",
    projectDate: "Date",
    clientTestimonials: "Client testimonials",
    clientRole: "Client",
    sampleTestimonial:
      "This is sample testimonial content. Replace it with a genuine client review before publishing.",
    sampleArticleBody:
      "This article section is sample content intended to demonstrate the layout. Replace it with an original article that reflects your experience, research, and practical advice.",
    sampleArticleBody2:
      "A useful article explains the context, walks through the important decisions, and gives readers clear takeaways they can apply. Keep the content specific, accurate, and easy to scan.",
    sampleAuthor: "Portfolio visitor",
    theme: "Theme",
  },
  fa: {
    fullName: "عباس اجلالی",
    home: "خانه",
    about: "درباره من",
    services: "خدمات",
    portfolio: "نمونه‌کارها",
    blog: "بلاگ",
    contact: "تماس با من",
    madeBy: "ساخته‌شده توسط",
    intro:
      "من توسعه‌دهنده وب هستم و روی ساخت تجربه‌های سریع، واکنش‌گرا و کاربرپسند تمرکز دارم.",
    aboutSubtitle: "درباره من",
    aboutTitle: "من کی هستم؟",
    serviceSubtitle: "خدمات",
    serviceTitle: "چه کاری می‌توانم برای شما انجام دهم؟",
    portfolioSubtitle: "نمونه‌کارها",
    portfolioTitle: "پروژه‌های منتخب",
    blogSubtitle: "مقالات",
    blogTitle: "جدیدترین مقالات",
    contactSubtitle: "ارتباط",
    contactTitle: "تماس با من",
    name: "نام و نام خانوادگی",
    email: "آدرس ایمیل",
    message: "پیام شما",
    namePlaceholder: "نام شما",
    messagePlaceholder: "پیام خود را اینجا بنویسید",
    send: "ارسال پیام",
    moreDetails: "جزئیات بیشتر",
    by: "نویسنده:",
    trustedBrands: "برندهایی که به من اعتماد کردند",
    funFacts: "چند نکته جالب",
    projectsCompleted: "پروژه‌های انجام‌شده",
    yearsExperience: "سال تجربه",
    clients: "مشتریان راضی",
    language: "زبان",
    profileRole: "توسعه‌دهنده فرانت‌اند",
    serviceNames: [
      "توسعه وب",
      "طراحی گرافیک",
      "توسعه بازی",
      "مشاوره کسب‌وکار",
      "بازاریابی دیجیتال",
      "هوش مصنوعی",
    ],
    serviceDescription:
      "راهکارهایی کاربردی با تمرکز بر اهداف، تجربه کاربری و عملکرد.",
    aboutText1:
      "من توسعه‌دهنده فرانت‌اند هستم و از تبدیل ایده‌ها به برنامه‌های وب سریع، دسترس‌پذیر و قابل نگهداری لذت می‌برم.",
    aboutText2:
      "با ابزارهای مدرن جاوااسکریپت کار می‌کنم و بر رابط‌های واکنش‌گرا، ساختار کامپوننتی روشن و تجربه کاربری روان تمرکز دارم.",
    articleTitle: "انتخاب فونت مناسب برای وب‌سایت",
    projectTitle: "فروشگاه لباس ساخته‌شده با React و Next.js",
    detailsArticle: "جزئیات مقاله",
    detailsProject: "جزئیات پروژه",
    projectDescription:
      "این پروژه نمونه‌ای از رابط فروشگاهی واکنش‌گرا با کامپوننت‌های قابل استفاده مجدد React و مسیریابی Next.js است.",
    projectDescription2:
      "تمرکز پیاده‌سازی بر ناوبری روشن، یافتن محصولات، چیدمان واکنش‌گرا و طراحی بصری یکپارچه در اندازه‌های مختلف صفحه است.",
    projectDescription3:
      "ساختار صفحه طوری طراحی شده است که اطلاعات محصولات خوانا بماند و تجربه مرور در نمایشگرهای دسکتاپ، تبلت و موبایل یکپارچه باشد.",
    projectClientValue: "پروژه نمایشی",
    articleDescription:
      "انتخاب فونت وب‌سایت بخش مهمی از ساخت رابط کاربری خوانا و دسترس‌پذیر است.",
    articleDescription2:
      "خوانایی، پشتیبانی زبان، سرعت بارگذاری، وزن‌های موجود و نمایش فونت در موبایل و دسکتاپ را بررسی کنید.",
    articleDescription3:
      "این متن اولیه است. پیش از انتشار، آن را با مقاله اختصاصی خود جایگزین کنید.",
    programmingSkills: "مهارت‌های برنامه‌نویسی",
    languageSkills: "مهارت‌های زبانی",
    wordpress: "وردپرس",
    javascript: "جاوااسکریپت",
    react: "ری‌اکت",
    english: "انگلیسی",
    french: "فرانسوی",
    arabic: "عربی",
    skills: "مهارت‌ها",
    webDevelopment: "توسعه وب",
    backendDevelopment: "توسعه بک‌اند",
    uiux: "طراحی UI/UX",
    videoEditing: "تدوین ویدئو",
    reactNext: "React و Next.js",
    interests: "علاقه‌مندی‌ها",
    gameDevelopment: "توسعه بازی",
    workingWithAI: "کار با هوش مصنوعی",
    football: "فوتبال",
    swimming: "شنا",
    socialSkills: "مهارت‌های اجتماعی",
    educationHeading: "تحصیلات",
    workExperienceHeading: "سوابق کاری",
    testimonials: "دیدگاه مشتریان",
    educationOne: "سابقه تحصیلی ۱",
    educationTwo: "سابقه تحصیلی ۲",
    educationThree: "سابقه تحصیلی ۳",
    degreeOne: "جزئیات مدرک را تکمیل کنید",
    degreeTwo: "جزئیات مدرک را تکمیل کنید",
    degreeThree: "جزئیات مدرک را تکمیل کنید",
    companyOne: "سابقه کاری ۱",
    companyTwo: "سابقه کاری ۲",
    companyThree: "سابقه کاری ۳",
    webDesigner: "طراح وب",
    date: "تاریخ",
    share: "اشتراک‌گذاری",
    client: "کارفرما",
    projectLink: "لینک پروژه",
    comments: "دیدگاه‌ها",
    pricingTitle: "تعرفه‌ها",
    freePlan: "رایگان",
    monthly: "/ماهانه",
    freeTemplate: "قالب رایگان",
    freeFonts: "فونت رایگان",
    oneMonthSupport: "یک ماه پشتیبانی",
    customTemplate: "قالب اختصاصی",
    premiumFonts: "فونت حرفه‌ای",
    threeMonthsSupport: "سه ماه پشتیبانی",
    professionalConsultation: "مشاوره حرفه‌ای",
    popular: "محبوب",
    professional: "حرفه‌ای",
    purchase: "خرید",
    linesOfCode: "خط کد",
    downloadResume: "دانلود رزومه",
    locationLabel: "موقعیت",
    emailLabel: "ایمیل",
    educationLabel: "تحصیلات",
    interestsLabel: "علاقه‌مندی‌ها",
    experienceLabel: "سابقه",
    focusLabel: "حوزه فعالیت",
    projectClient: "کارفرما",
    projectDate: "تاریخ",
    clientTestimonials: "دیدگاه مشتریان",
    clientRole: "کارفرما",
    sampleTestimonial:
      "این متن نمونه است. پیش از انتشار، آن را با دیدگاه واقعی مشتری جایگزین کنید.",
    sampleArticleBody:
      "این بخش متن نمونه‌ای برای نمایش چیدمان مقاله است. پیش از انتشار، مقاله‌ای اختصاصی با تجربه‌ها، پژوهش‌ها و توصیه‌های کاربردی خود جایگزین کنید.",
    sampleArticleBody2:
      "یک مقاله مفید زمینه موضوع را توضیح می‌دهد، تصمیم‌های مهم را بررسی می‌کند و نکته‌های روشن و قابل استفاده در اختیار خواننده می‌گذارد. محتوا را دقیق، مشخص و خوانا نگه دارید.",
    sampleAuthor: "بازدیدکننده نمونه‌کار",
    theme: "پوسته",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved === "fa" || saved === "en") setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.dataset.language = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key) => messages[language][key] ?? messages.en[key] ?? key,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
