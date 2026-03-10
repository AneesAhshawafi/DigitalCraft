// JS/language.js
// Define translation dictionary for Arabic (ar) and English (en)
const translations = {
    ar: {
        "page-title": "الرئيسية",
        "nav-home": "الرئيسية",
        "nav-features": "المميزات",
        "nav-services": "الخدمات",
        "nav-portfolio": "أعمال سابقة",
        "nav-about": "من نحن",
        "nav-contact": "تواصل بنا",

        "landing-title": "مرحباً بك في متجرنا الرقمي",
        "landing-subtitle": "أعمال رقمية تصنع فرقاً",

        "contact-title": "تواصل معنا",
        "contact-subtitle": "نحن هنا لنحوّل فكرتك إلى واقع",
        "contact-label": "يسعدنا تواصلك معنا عبر البريد الإلكتروني:",
        "contact-social": "تابعنا على المنصات التالية:",

        "footer-text": "جميع الحقوق محفوظة",

        "features-title": "المميزات",
        "features-subtitle": "لا نكتفي بالانجاز، بل نركز على تقديم قيمة حقيقية",
        "feature-speed": "سرعة التنفيذ",
        "feature-speed-desc": "نلتزم بإنجاز المشاريع في وقت قياسي مع الحفاظ على أعلى معايير الجودة.",
        "feature-quality": "جودة العمل",
        "feature-quality-desc": "نُقدّم أعمالًا بجودة احترافية مع عناية بأدق التفاصيل لتُظهر مشروعك بأفضل صورة.",
        "feature-support": "استجابة سريعة ودعم مباشر",
        "feature-support-desc": "نضمن لك سرعة في الرد على استفساراتك ومتابعة مستمرة لأي طلبات أو تعديلات.",
        "feature-flexibility": "مرونة في التعديلات",
        "feature-flexibility-desc": "نمنحك حرية التعديل وفق احتياجك لضمان أن المنتج النهائي يعكس رؤيتك بالكامل.",

        "about-title": "من نحن",
        "about-subtitle": "البساطة سر التميز",
        "about-text1": "نحن فريق متخصص في تقديم خدمات رقمية احترافية تجمع بين الإبداع البصري والدقة البرمجية. نؤمن بأن كل مشروع يحتاج إلى فهم عميق لرؤية العميل وتحويلها إلى منتج فعّال وملهم.",
        "about-text2": "بخبرة واسعة في تصميم الشعارات، تطوير المواقع، وبرمجة التطبيقات، نعمل بشغف واهتمام بالتفاصيل لضمان تحقيق نتائج مبهرة. هدفنا هو بناء علاقة طويلة الأمد مبنية على الجودة والثقة.",

        "portfolio-title": "أعمال سابقة",
        "portfolio-subtitle": "العمل المتقن يخلّد نفسه بمرور الزمن",
        "portfolio-project1-title": "موقع تعليمي تفاعلي",
        "portfolio-project1-desc": "تطوير موقع إلكتروني يقدم دورات تعليمية بواجهة متجاوبة ولوحة تحكم مخصصة للمدربين والطلاب.",
        "portfolio-project2-title": "شعار وهوية بصرية لعلامة ناشئة",
        "portfolio-project2-desc": "تصميم شعار احترافي وبناء هوية مرئية متكاملة لعلامة تجارية في قطاع التقنية الناشئة.",
        "portfolio-project3-title": "تطبيق إدارة مهام",
        "portfolio-project3-desc": "تصميم وبرمجة تطبيق موبايل يساعد المستخدمين على تنظيم المهام اليومية ومتابعة تقدمهم بسهولة.",

        "services-title": "خدماتنا",
        "services-subtitle": "نقدّم حلولًا رقمية متكاملة ترتقي بمشروعك إلى مستوى جديد من الاحتراف",
        "service-web-title": "تطوير مواقع متكاملة",
        "service-web-desc": "إنشاء مواقع إلكترونية تفاعلية ومرنة باستخدام تقنيات حديثة، متوافقة مع جميع الأجهزة ومحسنة لمحركات البحث.",
        "service-app-title": "تطوير تطبيقات الجوال",
        "service-app-desc": "تصميم وبرمجة تطبيقات Android وiOS بأداء ممتاز وتجربة مستخدم سلسة باستخدام Flutter أو React Native.",
        "service-logo-title": "تصميم شعارات وهوية بصرية",
        "service-logo-desc": "تصميم شعارات فريدة وهوية مرئية احترافية تعكس جوهر علامتك التجارية وتُميزها في السوق.",
        "service-book-title": "تصميم أغلفة كتب ومطبوعات",
        "service-book-desc": "تصميم غلافات كتب احترافية للطباعة أو النشر الإلكتروني، بأسلوب يجمع بين الجاذبية والبساطة.",
        "service-request-btn": "اطلب خدمة",
        "modal-title": "طلب خدمة",
        "modal-select-placeholder": "اختر الخدمة المطلوبة",
        "option-web": " تطوير مواقع",
        "option-app": " تطبيقات الجوال",
        "option-logo": "تصميم شعار وهوية",
        "option-book": "تصميم غلاف كتاب",
        "modal-upload": "إرفاق ملف",
        "modal-no-file": "لم يتم اختيار ملف",
        "modal-submit": "إرسال الطلب",

        "form-name": "الاسم الكامل",
        "form-email": "البريد الإلكتروني",
        "form-message": "تفاصيل إضافية (اختياري)",

        // login.html
        "login-title": "تسجيل الدخول",
        "form-email": "البريد الإلكتروني",
        "form-password": "كلمة المرور",
        "login-button": "دخول",
        "forgot-password": "نسيت كلمة المرور؟",
        "create-account": "إنشاء حساب جديد",
        "back-home": "العودة للرئيسية",

        // signup.html
        "signup-title": "إنشاء حساب",
        "form-confirm-password": "تأكيد كلمة المرور",
        "signup-button": "تسجيل",
        "have-account": "لديك حساب؟ تسجيل الدخول",

        // reset.html
        "reset-title": "إعادة تعيين كلمة المرور",
        "form-new-password": "كلمة المرور الجديدة",
        "reset-button": "تحديث",
        "back-login": "العودة لتسجيل الدخول",
        "login-btn": "تسجيل الدخول",
        "logout-btn": "تسجيل الخروج"

    },

    en: {
        "page-title": "Home",
        "nav-home": "Home",
        "nav-features": "Features",
        "nav-services": "Services",
        "nav-portfolio": "Portfolio",
        "nav-about": "About",
        "nav-contact": "Contact",

        "landing-title": "Welcome to our Digital Store",
        "landing-subtitle": "Digital services that make a difference",

        "contact-title": "Contact",
        "contact-subtitle": "We’re here to turn your idea into reality",
        "contact-label": "Feel free to reach us via email:",
        "contact-social": "Follow us on social media:",

        "footer-text": "All Rights Reserved",

        "features-title": "Features",
        "features-subtitle": "We don’t just deliver, we add value",
        "feature-speed": "Fast Execution",
        "feature-speed-desc": "We commit to completing projects quickly while maintaining top quality.",
        "feature-quality": "High Quality",
        "feature-quality-desc": "We deliver professional results with attention to detail to present your project at its best.",
        "feature-support": "Responsive Support",
        "feature-support-desc": "We guarantee prompt replies and ongoing support for any requests or changes.",
        "feature-flexibility": "Flexible Edits",
        "feature-flexibility-desc": "We offer full customization to ensure the final product reflects your vision.",

        "about-title": "About",
        "about-subtitle": "Simplicity is the key to excellence",
        "about-text1": "We are a team specialized in providing professional digital services that blend creative visuals with precise development. We believe every project needs a deep understanding of the client's vision to turn it into an impactful and inspiring product.",
        "about-text2": "With extensive experience in logo design, web development, and app programming, we work passionately and meticulously to achieve outstanding results. Our goal is to build a long-term relationship based on quality and trust.",

        "portfolio-title": "Portfolio",
        "portfolio-subtitle": "Quality work stands the test of time",
        "portfolio-project1-title": "Interactive Educational Website",
        "portfolio-project1-desc": "Developed a responsive e-learning platform with custom dashboards for instructors and students.",
        "portfolio-project2-title": "Logo and Branding for a Startup",
        "portfolio-project2-desc": "Designed a professional logo and full brand identity for a tech startup.",
        "portfolio-project3-title": "Task Management App",
        "portfolio-project3-desc": "Designed and built a mobile app to help users organize daily tasks and track their progress easily.",

        "services-title": "Services",
        "services-subtitle": "We offer integrated digital solutions to elevate your project professionally.",
        "service-web-title": "Full Website Development",
        "service-web-desc": "Build responsive and flexible websites using modern technologies, optimized for all devices and search engines.",
        "service-app-title": "Mobile App Development",
        "service-app-desc": "Design and develop Android and iOS apps with great performance and user experience using Flutter or React Native.",
        "service-logo-title": "Logo & Visual Identity Design",
        "service-logo-desc": "Design unique logos and professional visual branding that reflects your brand essence and stands out in the market.",
        "service-book-title": "Book & Print Cover Design",
        "service-book-desc": "Design attractive and clean book covers for print or digital publishing.",
        "service-request-btn": "Request Service",
        "modal-title": "Service Request",
        "modal-select-placeholder": "Select a service",
        "option-web": "Websites Developing",
        "option-app": "Application Mobile Developing",
        "option-logo": "Logo Design",
        "option-book": "Book Cover Design",
        "modal-upload": "Attach File",
        "modal-no-file": "No file selected",
        "modal-submit": "Submit Request",

        "form-name": "Full Name",
        "form-email": "Email Address",
        "form-message": "Additional details (optional)",

        // login.html
        "login-title": "Login",
        "form-email": "Email Address",
        "form-password": "Password",
        "login-button": "Log In",
        "forgot-password": "Forgot Password?",
        "create-account": "Create a New Account",
        "back-home": "Back to Home",

        // signup.html
        "signup-title": "Create Account",
        "form-confirm-password": "Confirm Password",
        "signup-button": "Sign Up",
        "have-account": "Already have an account? Login",

        // reset.html
        "reset-title": "Reset Password",
        "form-new-password": "New Password",
        "reset-button": "Update",
        "back-login": "Back to Login",
        "login-btn": "Login",
        "logout-btn": "Logout"


    }
};

// Function to set the selected language
function setLanguage(lang) {
    // Save selected language to localStorage
    localStorage.setItem("preferredLanguage", lang);

    // Set HTML language attribute
    document.documentElement.lang = lang;

    // Set text direction (rtl for Arabic, ltr for English)
    document.body.dir = lang === "ar" ? "rtl" : "ltr";

    // Update all elements with data-lang attributes
    document.querySelectorAll("[data-lang],div").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
        el.style.direction = lang === "ar" ? "rtl" : "ltr";
    });


    // Update placeholders in inputs and textareas
    document.querySelectorAll("[data-lang-placeholder]").forEach(el => {
        const key = el.getAttribute("data-lang-placeholder");
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
        el.style.direction = lang === "ar" ? "rtl" : "ltr";
        el.style.textAlign = lang === "ar" ? "right" : "left";
    });
}

// Language selector dropdown
const selector = document.getElementById("language-selector");

if (selector) {
    // On change of language, apply new language settings
    selector.addEventListener("change", function () {
        setLanguage(this.value);
    });

    // Load saved language or default to Arabic
    const savedLang = localStorage.getItem("preferredLanguage") || "ar";
    selector.value = savedLang;
    setLanguage(savedLang);
} else {
    // If selector doesn't exist (fallback)
    const savedLang = localStorage.getItem("preferredLanguage") || "ar";
    setLanguage(savedLang);
}
